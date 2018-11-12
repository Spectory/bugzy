class HomeController < ApplicationController
  def index
    num_of_comments = 0;
    comments = Comment.all
    comments.each do |c|
      # BUG: Printing objects to log is great for debugging... not!
      ap c
      # BUG: Maybe there's a better way calc num_of_comments?
      num_of_comments = num_of_comments + 1
    end
    @comments = comments[0..10]
  end
end
