{

  type PageInfo = {
    title: string;
  }
  type Page = 'home' | 'about' | 'contact';

  /**
   * Record Type
   * 첫번째 인자가 key 가 되고 두번째 인자가 들어가야될 값 형태가 된다.
   */
  const nav: Record<Page, PageInfo> = {
    home: { title : 'Home' },
    about: { title : 'About' },
    contact: { title : 'Contact' },
  }

  type Product = 'cat' | 'dog';

  // 대문자로 변환
  type NewProduct = Capitalize<Product> // 'CAT' | 'DOG'

}