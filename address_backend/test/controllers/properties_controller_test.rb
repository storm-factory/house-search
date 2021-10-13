class PropertiesControllerTest < ActionDispatch::IntegrationTest
  test "should get results" do
    get properties_url(format: :json), headers: { "Content-Type": "application/json" }, params: {filter: "Penn"}
    assert JSON.parse(@response.body)["results"].length == 1
    assert JSON.parse(@response.body)["results"][0]["address"] == "1600 Pennsylvania Ave"
  end
end
