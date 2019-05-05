Rails.application.routes.draw do
  namespace :api do
    get 'follows/create'
    get 'follows/destroy'
  end
  namespace :api do
    get 'comments/create'
    get 'comments/destroy'
  end
  namespace :api do
    get 'likes/create'
    get 'likes/destroy'
  end
  get 'likes/create'
  get 'likes/detroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root" # sets the root
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end
end
