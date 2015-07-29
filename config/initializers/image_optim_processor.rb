class ImageOptimProcessor
  def optim(temp_object)
    io = ImageOptim.new
    optimized = io.optimize_image(temp_object.path)
    optimized.nil? ? temp_object : optimized
  end
end