#!/bin/bash
# Dependency Cleanup and Security Update Script
# Generated: 2026-01-20

set -e  # Exit on error

echo "=================================================="
echo "Dependency Cleanup and Security Update Script"
echo "=================================================="
echo ""

# Backup package.json
echo "📦 Creating backup of package.json..."
cp package.json package.json.backup
echo "✓ Backup created: package.json.backup"
echo ""

# Phase 1: Critical Security Updates
echo "🚨 Phase 1: Critical Security Updates"
echo "--------------------------------------"
echo "Updating packages with known vulnerabilities..."

npm install next@15.3.7 \
  better-auth@latest \
  react-syntax-highlighter@latest

npm update qs \
  js-yaml \
  drizzle-kit

echo "✓ Security updates completed"
echo ""

# Phase 2: Remove Unused Dependencies
echo "🗑️  Phase 2: Removing Unused Dependencies"
echo "---------------------------------------"
echo "Removing 19 unused packages..."

# 3D Libraries (NOT USED)
echo "Removing 3D libraries..."
npm uninstall \
  @react-three/fiber \
  @react-three/drei \
  three \
  three-globe \
  cobe \
  simplex-noise

# Animation Libraries (NOT USED)
echo "Removing animation libraries..."
npm uninstall \
  framer-motion \
  motion \
  motion-dom

# Icon Libraries (NOT USED - using lucide-react)
echo "Removing unused icon libraries..."
npm uninstall \
  @heroicons/react \
  @tabler/icons-react \
  react-icons

# Carousel Libraries (PARTIALLY USED)
echo "Removing unused carousel plugins..."
npm uninstall \
  swiper \
  embla-carousel-autoplay \
  embla-carousel-auto-scroll

# Particle Effects (NOT USED)
echo "Removing particle effect libraries..."
npm uninstall \
  @tsparticles/engine \
  @tsparticles/react \
  @tsparticles/slim

# Miscellaneous Unused
echo "Removing miscellaneous unused packages..."
npm uninstall \
  atmn \
  autumn-js

echo "✓ Unused dependencies removed"
echo ""

# Phase 3: Cleanup and Optimization
echo "🧹 Phase 3: Cleanup and Optimization"
echo "-----------------------------------"

echo "Pruning extraneous packages..."
npm prune

echo "Deduplicating dependencies..."
npm dedupe

echo "Running audit fix (non-breaking)..."
npm audit fix || true

echo "✓ Cleanup completed"
echo ""

# Phase 4: Verification
echo "🧪 Phase 4: Verification"
echo "----------------------"

echo "Installing dependencies..."
npm install

echo "Running build test..."
npm run build

echo ""
echo "=================================================="
echo "✓ Dependency cleanup completed successfully!"
echo "=================================================="
echo ""
echo "Next Steps:"
echo "1. Review DEPENDENCY_AUDIT_REPORT.md for details"
echo "2. Test the application thoroughly:"
echo "   - Authentication flows"
echo "   - Admin panel"
echo "   - Checkout process"
echo "   - All user-facing features"
echo "3. Run: npm test (if tests exist)"
echo "4. Commit changes: git add . && git commit -m 'chore: cleanup dependencies and fix security vulnerabilities'"
echo ""
echo "Backup saved as: package.json.backup"
echo "=================================================="
