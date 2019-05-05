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

  # belongs_to :user

  def ensure_photo
    unless self.photo.attached? 
      errors[:photo] << "must be attached"
    end
  end

end
