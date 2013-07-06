# jquery postadas plugins

Just a little jQuery plugin to post datas with javascript, technically, this plugin add a hidden form in the page, all form fields are hidden, and then submit this form.
[Demo Page](http://demos.mimiz.fr/jquery/postdatas)

## Usage :

Just add the file jquery.postdatas.version.js, in your page and then you can use it :


    $.postdatas({
      url:'http://url.to.the.page/page.php',
      datas:[  // datas
        {name:'fieldName1', value:'field 1 value'},
        {name:'fieldName2', value:'field 2 value'},
        {name:'fieldName3', value:'field 3 value'}
      ]
    });

That’s all …

## Options

Options	Description	Default

 * url (String) -  the URL where you want to post your datas
 * datas (Array) -  Array of datas you want to post



