# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :string
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  # association
  has_many :posts,
    dependent: :destroy

  has_many :comments,
    dependent: :destroy

  has_many :likes,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :followings_joint,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followers_joint,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follow,
    dependent: :destroy
  
  has_many :followings,
    through: :followings_joint,
    source: :following

  has_many :followers,
    through: :followers_joint,
    source: :follower

  has_many :following_posts,
    thourgh: :followings,
    source: :posts

  # TODO
  # has_one_attached :photo

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username) 
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def password=(password) 
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password) 
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
