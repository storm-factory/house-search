require "test_helper"

class PropertyTest < ActiveSupport::TestCase
  test "Properties must have an address" do
    property = Property.new(zip: "81301")
    assert_not property.save, "Saved property without an address"
  end
end
