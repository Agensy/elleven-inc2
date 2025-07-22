#!/usr/bin/env node

/**
 * Script de verificação de performance
 * Analisa o build e fornece insights sobre otimizações
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

class PerformanceAnalyzer {
  constructor() {
    this.distPath = path.join(process.cwd(), 'dist')
    this.results = {
      bundleSize: {},
      images: [],
      recommendations: []
    }
  }

  // Analisa o tamanho dos bundles
  analyzeBundleSize() {
    console.log('🔍 Analisando tamanho dos bundles...')
    
    try {
      const staticPath = path.join(this.distPath, '_next', 'static')
      if (!fs.existsSync(staticPath)) {
        console.log('❌ Pasta de build não encontrada. Execute npm run build primeiro.')
        return
      }

      const chunks = this.getFilesByExtension(staticPath, '.js')
      const styles = this.getFilesByExtension(staticPath, '.css')

      this.results.bundleSize = {
        totalJS: this.calculateTotalSize(chunks),
        totalCSS: this.calculateTotalSize(styles),
        chunks: chunks.length,
        styles: styles.length
      }

      console.log(`📦 JavaScript: ${this.formatSize(this.results.bundleSize.totalJS)} (${chunks.length} arquivos)`)
      console.log(`🎨 CSS: ${this.formatSize(this.results.bundleSize.totalCSS)} (${styles.length} arquivos)`)
      
    } catch (error) {
      console.error('❌ Erro ao analisar bundles:', error.message)
    }
  }

  // Analisa imagens
  analyzeImages() {
    console.log('\n🖼️  Analisando imagens...')
    
    const publicPath = path.join(process.cwd(), 'public')
    if (!fs.existsSync(publicPath)) return

    const images = this.getFilesByExtension(publicPath, ['.jpg', '.jpeg', '.png', '.webp', '.avif'])
    
    images.forEach(img => {
      const size = fs.statSync(img.path).size
      this.results.images.push({
        name: img.name,
        size: size,
        optimized: img.name.includes('.webp') || img.name.includes('.avif')
      })
    })

    const totalImageSize = this.results.images.reduce((acc, img) => acc + img.size, 0)
    const optimizedImages = this.results.images.filter(img => img.optimized).length
    
    console.log(`📸 Total de imagens: ${this.results.images.length}`)
    console.log(`📏 Tamanho total: ${this.formatSize(totalImageSize)}`)
    console.log(`✅ Otimizadas: ${optimizedImages}/${this.results.images.length}`)
  }

  // Gera recomendações
  generateRecommendations() {
    console.log('\n💡 Recomendações:')
    
    // Bundle size recommendations
    if (this.results.bundleSize.totalJS > 500 * 1024) {
      this.results.recommendations.push('⚠️  Bundle JS muito grande (>500KB). Considere code splitting adicional.')
    }
    
    if (this.results.bundleSize.totalCSS > 100 * 1024) {
      this.results.recommendations.push('⚠️  CSS muito grande (>100KB). Considere purging de CSS não utilizado.')
    }

    // Image recommendations
    const largeImages = this.results.images.filter(img => img.size > 500 * 1024)
    if (largeImages.length > 0) {
      this.results.recommendations.push(`⚠️  ${largeImages.length} imagens muito grandes (>500KB). Otimize-as.`)
    }

    const unoptimizedImages = this.results.images.filter(img => !img.optimized)
    if (unoptimizedImages.length > 0) {
      this.results.recommendations.push(`⚠️  ${unoptimizedImages.length} imagens não otimizadas. Converta para WebP/AVIF.`)
    }

    // General recommendations
    this.results.recommendations.push('✅ Implementar Service Worker para cache offline')
    this.results.recommendations.push('✅ Configurar headers de cache no servidor')
    this.results.recommendations.push('✅ Implementar preload de recursos críticos')
    this.results.recommendations.push('✅ Monitorar Core Web Vitals em produção')

    if (this.results.recommendations.length === 0) {
      console.log('🎉 Tudo parece otimizado!')
    } else {
      this.results.recommendations.forEach(rec => console.log(rec))
    }
  }

  // Verifica configurações do Next.js
  checkNextConfig() {
    console.log('\n⚙️  Verificando configurações do Next.js...')
    
    const configPath = path.join(process.cwd(), 'next.config.mjs')
    if (!fs.existsSync(configPath)) {
      console.log('❌ next.config.mjs não encontrado')
      return
    }

    const config = fs.readFileSync(configPath, 'utf8')
    
    const checks = [
      { key: 'output: \'export\'', name: 'Static Export', found: config.includes('output: \'export\'') },
      { key: 'unoptimized: true', name: 'Image Optimization', found: config.includes('unoptimized: true') },
      { key: 'removeConsole', name: 'Console Removal', found: config.includes('removeConsole') },
      { key: 'optimizePackageImports', name: 'Package Optimization', found: config.includes('optimizePackageImports') }
    ]

    checks.forEach(check => {
      const status = check.found ? '✅' : '❌'
      console.log(`${status} ${check.name}`)
    })
  }

  // Utilitários
  getFilesByExtension(dir, extensions) {
    const files = []
    const exts = Array.isArray(extensions) ? extensions : [extensions]
    
    const scanDir = (currentDir) => {
      const items = fs.readdirSync(currentDir)
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
          scanDir(fullPath)
        } else {
          const ext = path.extname(item).toLowerCase()
          if (exts.includes(ext)) {
            files.push({
              name: item,
              path: fullPath,
              size: stat.size
            })
          }
        }
      })
    }
    
    if (fs.existsSync(dir)) {
      scanDir(dir)
    }
    
    return files
  }

  calculateTotalSize(files) {
    return files.reduce((total, file) => total + file.size, 0)
  }

  formatSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Executa todas as análises
  run() {
    console.log('🚀 Iniciando análise de performance...\n')
    
    this.checkNextConfig()
    this.analyzeBundleSize()
    this.analyzeImages()
    this.generateRecommendations()
    
    console.log('\n✨ Análise concluída!')
  }
}

// Executa o analisador
if (require.main === module) {
  const analyzer = new PerformanceAnalyzer()
  analyzer.run()
}

module.exports = PerformanceAnalyzer