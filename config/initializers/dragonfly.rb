class OptimizedThumb < Dragonfly::ImageMagick::Processors::Thumb
  def call(*args, &block)
    super
    args[0].process!(:optim)
  end
end


Dragonfly.app.configure do

  ### Image Optim processor

  processor :optim do |content|
    if optimized = ImageOptim.new.optimize_image(content.path).presence
      # We have to use a Tempfile which copy the optimized image because optimized correspond to a Tempfile path which may be deleted
      tempfile = Tempfile.new('optimized-image')
      begin
        optimized.copy(tempfile.path)
        content.update tempfile
      ensure
        tempfile.close # here we cannot use `close!` because of https://github.com/markevans/dragonfly/issues/319
      end
    end
  end

  processor :thumb, OptimizedThumb.new
end