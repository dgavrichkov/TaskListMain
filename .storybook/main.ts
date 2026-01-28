import type { StorybookConfig } from '@storybook/react-vite';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: { name: '@storybook/react-vite', options: {} },

  // docs: {
  //   autodocs: 'tag',
  // },

  async viteFinal(viteConfig) {
    // убрать дубликаты, если вдруг уже подключён
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      (p: any) => p?.name !== 'vite-plugin-eslint',
    );

    viteConfig.plugins!.push(
      eslint({
        // важное: корень проекта на уровень выше .storybook
        cwd: resolve(__dirname, '..'),
        // чтобы плагин не лез в виртуальные модули сторибука
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        // по желанию:
        cache: false,
        emitWarning: true,
        emitError: true,
      }),
    );

    // на всякий случай зафиксируем root vite (обычно не нужно, но помогает в нестандартных сетапах)
    viteConfig.root = resolve(__dirname, '..');

    return viteConfig;
  },
};

export default config;
