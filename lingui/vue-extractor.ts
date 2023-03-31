import * as vueCompiler from 'vue/compiler-sfc';
// @ts-expect-error issue in typings, will be fixed shortly
import babel from '@lingui/cli/api/extractors/babel';
import { ExtractorCtx, ExtractorType } from '@lingui/conf';
import { DEFAULT_EXTENSIONS } from '@babel/core';

const babelRe = new RegExp(
  '\\.(' +
    [...DEFAULT_EXTENSIONS, '.ts', '.mts', '.cts', '.tsx', '.vue']
      .map((ext) => ext.slice(1))
      .join('|') +
    ')$',
  'i',
);

export const extractor: ExtractorType = {
  match(filename: string) {
    return babelRe.test(filename);
  },
  extract(
    filename: string,
    code: string,
    onMessageExtracted,
    ctx: ExtractorCtx,
  ) {
    let finalCode: string | undefined;

    /**
     * Extract messages from script and script setup blocks in
     * vue files.
     */
    if (filename.endsWith('.vue')) {
      const {
        descriptor: { script, scriptSetup },
      } = vueCompiler.parse(code, { sourceMap: true, filename });

      finalCode = `${script?.content} ${scriptSetup?.content}`;
    }

    return babel.extract(filename, finalCode ?? code, onMessageExtracted, {
      sourcemaps: undefined,
      ...ctx,
    });
  },
};
