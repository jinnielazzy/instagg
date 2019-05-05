require 'test_helper'

class LikesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get likes_create_url
    assert_response :success
  end

  test "should get detroy" do
    get likes_detroy_url
    assert_response :success
  end

end
