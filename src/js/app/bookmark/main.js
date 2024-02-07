let bookmarks__top_btn, bookmarks__top_btn_data_show;
let bookmarks__wrapper;
if ( document.querySelector('.bookmarks__top-btn') != null )
{
  console.log('bookmarks__top-btn');
  bookmarks__top_btn = document.querySelector('.bookmarks__top-btn');
  bookmarks__wrapper = document.querySelectorAll('.bookmarks__wrapper');

  bookmarks__top_btn.addEventListener('click', (e) => {
    console.log(e.target);
    bookmarks__wrapper.forEach(element => {
      if ( element.dataset.show == 'show' )
      {
        element.dataset.show = 'hide';
      }
      else
      {
        element.dataset.show = 'show';
      }
    });
    if ( e.target.tagName == 'SPAN' )
    {
      if ( e.target.parentElement.dataset.show == 'show')
      {
        e.target.parentElement.dataset.show = 'hide';
      }
      else
      {
        e.target.parentElement.dataset.show = 'show';
      }
    }
    else
    {
      if ( e.target.dataset.show == 'show')
      {
        e.target.dataset.show = 'hide';
      }
      else
      {
        e.target.dataset.show = 'show';
      }
    }
  });
}