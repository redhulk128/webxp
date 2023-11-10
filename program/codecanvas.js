$(window).on('xpboot', () => {
    xp.applications.add('codecanvas', () => {
      var el = $.parseHTML(`<window width="750" height="750" title="Code Editor">
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
      
  <iframe height="100%" seamless="seamless" width="100%" src="https://redhulk.in/codecanvas/"></iframe>
    </div> 
      </window>`);
      document.body.appendChild(el[0]);
      $(el).updateWindow();
    });
      xp.startmenu.add('codecanvas', 'Code Editor', 'program/assets/codeeditor.png');
  });
  