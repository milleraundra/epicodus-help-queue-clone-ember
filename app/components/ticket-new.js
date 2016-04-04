import Ember from 'ember';

export default Ember.Component.extend({
  selectedLanguage: "Intro",
  actions: {
    selectLanguage(){
      this.set('selectedLanguage', event.target.value);
    },
    newTicket() {
      var params = {
        student: this.get('student') ? this.get('student') : "",
        problem: this.get('problem') ? this.get('problem') : "",
        location: this.get('location') ? this.get('location') : "",
        language: this.get('selectedLanguage')
      };
      this.sendAction('newTicket', params);
      this.set('student', "");
      this.set('location', "");
      this.set('problem', "");

    }
  }
});
