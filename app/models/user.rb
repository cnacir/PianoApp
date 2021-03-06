class User < ApplicationRecord
  has_many :songs 
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

	validates :username, uniqueness: true
	validates :username, presence: true
end
