# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  caption    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validate :ensure_photo
  has_one_attached :photo

  # TODO 
  # associations
  belongs_to :user
  has_many :likes
  has_many :comments
  
  has_many :likers,
    through: :likes,
    source: :user

  def ensure_photo
    unless self.photo.attached? 
      errors[:photo] << "must be attached"
    end
  end

end
