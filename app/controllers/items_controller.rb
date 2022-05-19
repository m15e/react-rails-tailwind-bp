class ItemsController < ApplicationController
  include ReactOnRails::Controller
  before_action :render_html

  def index; end

  private

  def render_html
    respond_to do |format|
      format.html
    end
  end
end