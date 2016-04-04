import Ember from 'ember';

export default Ember.Component.extend({
  isTeacher: false,
  actions: {
    isTeacher(){
      this.set('isTeacher', true);
    }
  }
});
