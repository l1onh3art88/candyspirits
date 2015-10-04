class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :check_age
  attr_accessor :month, :day, :year

  def check_age
    @check_age =("#{:month}/#{:day}/#{:year}".to_date + 21.years) < Date.today
    if(@check_age)
      redirect_to home_url
      
    else
      puts("You are not old enough to view this website.");
    end
      

   # check if the user has already confirmed their age.
  end
end
