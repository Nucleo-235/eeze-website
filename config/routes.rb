Rails.application.routes.draw do

  resources :projects
  resources :project_contents
  resources :image_project_contents
  resources :text_project_contents
  resources :youtube_project_contents
  resources :vimeo_project_contents

  scope "(:locale)", locale: /pt-BR|en/ do
    root to: 'pages#home'
    get 'pepsi', to: 'pages#pepsi'
    get 'quem-somos', to: 'pages#quem_somos'
    post "contato", to: "pages#contact"
  end
  devise_for :users

end
