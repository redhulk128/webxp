$(window).on('xpboot', () => {
    xp.applications.add('excel', () => {
      var el = $.parseHTML(`<window width="700" height="700" title="Excel">
        <style>
  iframe[seamless]{
    background-color: transparent;
    border: 0px none transparent;
    padding: 0px;
    overflow: hidden;
  }
  .frame-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0px;
    margin: 0px;
  }
    </style>
    
    <div class="frame-container">
      
  <iframe height="100%" seamless="seamless" width="100%" src="https://redhulk.in/excel/"></iframe>
    </div> 
      </window>`);
      document.body.appendChild(el[0]);
      $(el).updateWindow();
    });
      xp.startmenu.add('excel', 'Excel', 'program/assets/excel-icon-16674.png');
  });
  