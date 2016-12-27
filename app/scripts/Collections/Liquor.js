import Backbone from 'backbone';

export default Backbone.Collection.extend({
  model: Liquor,


    getLiqours(title) {
      $.ajax({
        type:'GET',
        url: 'https://lcboapi.com/products',
        data: {
            T: title,
            key: 'MDpjZWI0MzNlZS1jN2NkLTExZTYtYmUyZC00N2RlMzA3ZTQyMDU6dFNqak83ZEhKV2FHTGE2SjYwQXlINzhITVI0TGNEeWxVU3Zo'
        },
        success: (response) => {
          console.log(getLiqour);

        }
      })
      console.log(getLiqour);
    }
})
