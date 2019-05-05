# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  # TODO 
  # associations
  
  belongs_to :post
  belongs_to :user            
end
