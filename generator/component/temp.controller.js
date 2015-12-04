class <%= upCaseName %>Controller {
  constructor(factory) {
    this.name = '<%= name %>';
    this.init();
  }

  init(){
	//code
  }
}

export default ['<%= name %>.factory',<%= upCaseName %>Controller];
