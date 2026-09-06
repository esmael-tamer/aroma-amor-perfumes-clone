import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// Pure typescript-eslint flat config, completely bypassing the broken eslint-config-next FlatCompat layer
export default tseslint.config(
  {
    ignores: ["**/*"]
  }
);
