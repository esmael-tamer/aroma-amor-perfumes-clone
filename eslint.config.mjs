import { FlatCompat } from '@eslint/eslintrc'
import nextConfig from 'eslint-config-next'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    plugins: ['import'],
  }),
  {
    ignores: [
      "**/components/ui/chart.tsx"
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
]

export default eslintConfig
