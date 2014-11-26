require 'jekyll_asset_pipeline'

module JekyllAssetPipeline
  class SassConverter < JekyllAssetPipeline::Converter
    require 'sass'

    def self.filetype
      '.scss'
    end

    def convert
      paths = [
        '.',
        '_assets/moj_internal_template/app/assets/stylesheets',
        '_assets/govuk_template/source/assets/stylesheets',
        '_assets/govuk_frontend_toolkit/stylesheets'
      ]
      return Sass::Engine.new(@content, syntax: :scss, :load_paths => paths,).render
    end
  end

  class ImageConverter < JekyllAssetPipeline::Converter

    def self.filetype
      '.png'
    end

  end
end