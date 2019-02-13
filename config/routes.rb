Rails.application.routes.draw do
  get 'homes/index'
  get 'songs/index'
  get 'songs/new'
  get 'songs/create'
  get 'songs/show'
  get 'songs/edit'
  get 'songs/update'
  get 'songs/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
