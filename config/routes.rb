Rails.application.routes.draw do
	resources :songs
	get '/profile/:id', :to => 'homes#profile', as: 'profile'
	root 'homes#index'

	devise_for :users, controllers: { sessions: 'users/sessions',
																		confirmations: 'users/confirmations',
																		omniauthcallbacks: 'users/omniauthcallbacks',
																		passwords: 'users/passwords',
																		registrations: 'users/registrations',
																		unlocks: 'users/unlocks'}


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
