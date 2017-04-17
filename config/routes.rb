Rails.application.routes.draw do

  resources :pepsi
  resources :quem_somos
  resources :projects
  resources :project_contents
  resources :image_project_contents
  resources :text_project_contents
  resources :youtube_project_contents
  resources :vimeo_project_contents
  post "/contact_form", to: "quem_somos#index"

  scope "(:locale)", locale: /pt-BR|en/ do
    root to: 'pages#home'
  end
  devise_for :users

end
