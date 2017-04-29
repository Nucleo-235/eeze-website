class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  skip_before_action :set_locale, only: [:home]
  skip_before_action :persist_locale, only: [:home]
  before_action :redirect_to_locale_if_not_set, only: [:home]

  def home

    @projects = Project.all.order(:sort_order)
    if @can_edit
      @new_project = Project.new
    end

    @parallax = [ ['parallax1.png', 0.6], ['parallax2.png', 0.6], ['parallax3.png', 0.1], ['parallax4.png', 0.2], ['parallax5.png', 0.3],
                  ['parallax6.png', 0.7], ['parallax7.png', 0.7], ['parallax8.png', 0.4], ['parallax9.png', 0.4], ['parallax10.png', 0.6],
                  ['parallax11.png', 0.5] ]

    @contact = ContactForm.new
  end

  def pepsi
  end

  def quem_somos
    @contact = ContactForm.new
  end

  def contact
    @contact = ContactForm.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      redirect_to root_path, notice: 'Obrigado por enviar sua mensagem. Entraremos em contato em breve!'
    else
      redirect_to root_path, error: 'Não foi possível enviar a mensagem.'
    end

    redirect_to_locale_if_not_set
  end
end
