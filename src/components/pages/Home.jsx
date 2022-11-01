import React from 'react'

const Home = () => {
  return (
    <>
 <div>
  {/*Header Start*/}
  <header className="header">
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="top-welcome">Welcome to ecommerce, let's subscribe our newsletter to GET special promotion 50% OFF all items</div>
          </div>
          <div className="col-lg-6">
            <div className="top-head-col">
              <div className="track-order"> <i className="fas fa-truck" />
                <p>Track Your Order </p>
              </div>
              <div className="hotline"> <i className="fas fa-phone-alt" />
                <p>Hotline (+123)4 567 890</p>
              </div>
              <div className="currency-dropdown">
                <select name className="form-control">
                  <option>$ US Dollor</option>
                  <option>£GBP Dollor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container relative">
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap mr-auto align-items-center"> <a href="#" className="logo"><img src="images/logo.png" alt /></a>
          <div className="search-btn-mobile d-lg-none"><i className="fas fa-search" /></div>
          <div className="search-field">
            <div className="input-group">
              <div className="category-select">
                <select name className="form-control">
                  <option>All Category</option>
                </select>
              </div>
              <input type="text" className="form-control" placeholder="Search " />
              <div className="input-group-append">
                <button className="btn search-btn " type="button"><i className="fas fa-search" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-top-right d-flex flex-wrap ml-auto">
          <ul className="d-flex">
            <li className="d-flex align-items-center"> <a href="#"> <i className="fas fa-shopping-cart" /> My Cart - 0 item(s) </a> </li>
            <li className="d-flex align-items-center"> <a href="#"> <i className="fas fa-user" /> Login / Register </a> </li>
          </ul>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg">
      <div className="container"> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation"> <i className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item active"><a className="nav-link" href="#">Fashions</a> 
            </li>
            <li className="nav-item dropdown"><a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Electronic <i className="fas fa-chevron-down" /></a>
              <div className="dropdown-menu">
                <div className="p-3">
                  <div className="row">
                    <div className="col-sm-6 col-md-3 mb-3 mb-sm-0">
                      <ul className="mega-menu-list">
                        <li><a href="#"> Submenu item 1</a>
                        </li>
                        <li><a href="#"> Submenu item 2 </a>
                        </li>
                        <li><a href="#"> Submenu item 3 </a>
                        </li>
                        <li><a href="#"> Submenu item 4</a>
                        </li>
                        <li><a href="#"> Submenu item 5 </a>
                        </li>
                        <li><a href="#"> Submenu item 6 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-sm-0">
                      <ul className="mega-menu-list">
                        <li><a href="#"> Submenu item 1</a>
                        </li>
                        <li><a href="#"> Submenu item 2 </a>
                        </li>
                        <li><a href="#"> Submenu item 3 </a>
                        </li>
                        <li><a href="#"> Submenu item 4</a>
                        </li>
                        <li><a href="#"> Submenu item 5 </a>
                        </li>
                        <li><a href="#"> Submenu item 6 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-sm-0">
                      <ul className="mega-menu-list">
                        <li><a href="#"> Submenu item 1</a>
                        </li>
                        <li><a href="#"> Submenu item 2 </a>
                        </li>
                        <li><a href="#"> Submenu item 3 </a>
                        </li>
                        <li><a href="#"> Submenu item 4</a>
                        </li>
                        <li><a href="#"> Submenu item 5 </a>
                        </li>
                        <li><a href="#"> Submenu item 6 </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-sm-0">
                      <ul className="mega-menu-list">
                        <li><a href="#"> Submenu item 1</a>
                        </li>
                        <li><a href="#"> Submenu item 2 </a>
                        </li>
                        <li><a href="#"> Submenu item 3 </a>
                        </li>
                        <li><a href="#"> Submenu item 4</a>
                        </li>
                        <li><a href="#"> Submenu item 5 </a>
                        </li>
                        <li><a href="#"> Submenu item 6 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Furniture <i className="fas fa-chevron-down" /></a>
              <div className="dropdown-menu">
                <div className="p-3">
                  <div className="row">
                    <div className="col-sm-3 mb-3 mb-sm-0">
                      <div className="img-box">
                        <a className="w-100" href="#">
                          <img className="w-100" src="images/banner1.jpg" alt="Image" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-3 mb-3 mb-sm-0">
                      <div className="img-box">
                        <a className="w-100" href="#">
                          <img className="w-100" src="images/banner2.jpg" alt="Image" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-3 mb-3 mb-sm-0">
                      <div className="img-box">
                        <a className="w-100" href="#">
                          <img className="w-100" src="images/banner3.jpg" alt="Image" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-3 mb-3 mb-sm-0">
                      <div className="img-box">
                        <a className="w-100" href="#">
                          <img className="w-100" src="images/banner4.jpg" alt="Image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"> <a className="nav-link" href="#"> Accessories </a>
            </li>
            <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Shoes <i className="fas fa-chevron-down" /> </a>
              <div className="dropdown-menu">
                <div className="p-3">
                  <div className="row">
                    <div className="col-sm-6 col-md-3  mb-3 mb-sm-0">
                      <img src="images/banner5.jpg" alt="Image" />
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-sm-0">
                      <img src="images/banner6.jpg" alt="Image" />
                    </div>
                    <div className="col-sm-6 col-md-3  mb-3 mb-sm-0">
                      <img src="images/banner7.jpg" alt="Image" />
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-sm-0">
                      <img src="images/banner8.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Smartphone</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Cameras</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Latops</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Tablets</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Makeup</a></li>
            <li className="nav-item"><a className="nav-link" href="#">iPhone</a></li>
          </ul>
        </div></div>
      {/* navbar-collapse.// */}
    </nav>
  </header>
  {/*Header End*/} 
  {/*Banner Start*/}
  <div className="banner-slider ">
    <div className="header-slider owl-carousel owl-theme">
      <div className="item">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="banner-content">
            <p>Trendy Collection’s</p>
            <h1> <span>Building <img src="images/heart.png " /></span> a better you </h1>
            <p>Anyone can beat you but no one can beat your
              outfit as long as you wear Ecstasy outfits.</p>
            <p><a href="#" className="btn custom-btn-lg ">Start Shopping <i className="fas fa-chevron-right" /></a> <a href className="playvideo "><img src="images/video-icon.png" alt /> Play Video</a></p>
          </div>
          <figure className="slider-img"><img src="images/girl-img2.png" alt /></figure>
        </div>
      </div>
    </div>
    <div className="slidegirl"> <img src="images/girl-img.png" alt /></div>
    <div className="hotdeals">
      <div><img src="images/hot-deal.png" alt /></div>
      <div className="hotdeallnk"><a href>Hot Deals <i className="fas fa-long-arrow-alt-right" /></a> </div>
    </div>
    <div className="dealsoftheday">
      <div>
        <h3><img src="images/filter.png" />Deals Of The Days</h3>
      </div>
      <div className="dealsection">
        <div className="deal-slider owl-carousel owl-theme">
          <div className="item">
            <div className="deal-box">
              <figure> <a href="#"><img src="images/thumb1.png" alt /></a> </figure>
              <h4>Watches</h4>
              <p>See all</p>
            </div>
          </div>
          <div className="item">
            <div className="deal-box">
              <figure> <a href="#"><img src="images/thumb2.png" alt /></a> </figure>
              <h4>Sneakers</h4>
              <p>See all</p>
            </div>
          </div>
          <div className="item">
            <div className="deal-box">
              <figure> <a href="#"><img src="images/thumb3.png" alt /></a> </figure>
              <h4>Sunglasses</h4>
              <p>See all</p>
            </div>
          </div>
          <div className="item">
            <div className="deal-box">
              <figure> <a href="#"><img src="images/thumb1.png" alt /></a> </figure>
              <h4>Watches</h4>
              <p>See all</p>
            </div>
          </div>
          <div className="item">
            <div className="deal-box">
              <figure> <a href="#"><img src="images/thumb2.png" alt /></a> </figure>
              <h4>Sneakers</h4>
              <p>See all</p>
            </div>
          </div>
          <div className="item">
            <div className="deal-box">
              <figure> <a href="#"><img src="images/thumb3.png" alt /></a> </figure>
              <h4>Sunglasses</h4>
              <p>See all</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Banner End*/} 
  {/*ecommerce service Start*/}
  <div className="ecommerce-service">
    <div className="container">
      <ul>
        <li> <i><img src="images/ecommerce-icon1.jpg" alt /></i>
          <div className="ecom-info"> <strong>Free Delivery</strong>
            <p>From $59.89</p>
          </div>
        </li>
        <li> <i><img src="images/ecommerce-icon2.jpg" alt /></i>
          <div className="ecom-info"> <strong>Support 24/7</strong>
            <p>Online 24 hours</p>
          </div>
        </li>
        <li> <i><img src="images/ecommerce-icon3.jpg" alt /></i>
          <div className="ecom-info"> <strong>Free Return</strong>
            <p>365 a day</p>
          </div>
        </li>
        <li> <i><img src="images/ecommerce-icon4.jpg" alt /></i>
          <div className="ecom-info"> <strong>Payment Method</strong>
            <p>Secure payment</p>
          </div>
        </li>
        <li> <i><img src="images/ecommerce-icon5.jpg" alt /></i>
          <div className="ecom-info"> <strong>Big Saving</strong>
            <p>Weeken Sales</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/*ecommerce service End*/} 
  {/*Popular Start*/}
  <div className="section">
    <div className="container">
      <div className="mid-heading">
        <h2>HATS &amp; HEADBANDS</h2>
      </div>
      <div className="product-slider owl-carousel owl-theme">
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img1.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img2.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img3.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img4.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img5.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img6.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
      </div>
    </div>
  </div>
  {/*Popular End*/} 
  {/*Ad mid Start*/}
  <div className="section ad-mid-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-6"> <a href="#"><img src="images/ad6.png" alt /></a> </div>
        <div className="col-sm-6"> <a href="#"><img src="images/ad7.png" alt /></a> </div>
      </div>
    </div>
  </div>
  {/*Ad mid End*/} 
  {/*Best Sellers Start*/}
  <div className="section">
    <div className="container">
      <div className="mid-heading">
        <h2>New Arrivals</h2>
      </div>
      <div className="product-slider owl-carousel owl-theme">
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img1.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img2.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img3.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img4.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img5.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img6.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
      </div>
    </div>
  </div>
  {/*Best Sellers End*/} 
  {/*Ad mid Start*/}
  <div className="section ad-mid-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-4"> <a href="#"><img src="images/ad2.png" alt /></a> </div>
        <div className="col-sm-4"> <a href="#"><img src="images/ad3.png" alt /></a> </div>
        <div className="col-sm-4"> <a href="#"><img src="images/ad4.png" alt /></a> </div>
        <div className="col-sm-12 mt-2"> <a href="#"><img src="images/ad5.png" alt /></a> </div>
      </div>
    </div>
  </div>
  {/*Ad mid End*/} 
  {/*Ad mid Start*/}
  <div className="section ad-mid-section">
    <div className="container">
      <div className="mid-heading">
        <h2>Flash Sale</h2>
      </div>
      <div className="row">
        <div className="col-sm-6"> <a href="#"><img src="images/ad8.png" alt /></a> </div>
        <div className="col-sm-6"> <a href="#"><img src="images/ad9.png" alt /></a> </div>
      </div>
    </div>
  </div>
  {/*Ad mid End*/} 
  {/*Best Sellers Start*/}
  <div className="section">
    <div className="container">
      <div className="mid-heading">
        <h2>Best Sellers</h2>
      </div>
      <div className="product-slider owl-carousel owl-theme">
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img1.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img2.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img3.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img4.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img5.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
        <div className="item">
          <div className="product-box">
            <figure> <a href="#"><img src="images/img6.png" alt /></a> </figure>
            <h4>Product Name</h4>
            <div className="star-rating"><img src="images/star.png" alt /></div>
            <span className="price">$100.00</span> </div>
        </div>
      </div>
    </div>
  </div>
  {/*Best Sellers End*/} 
  {/*Featured Brands logo Start*/}
  <div className="section">
    <div className="container">
      <div className="mid-heading">
        <h2>Featured Brands</h2>
      </div>
      <div className="logo-sec">
        <ul>
          <li><img src="images/brand-logo1.png" alt /></li>
          <li><img src="images/brand-logo2.png" alt /></li>
          <li><img src="images/brand-logo3.png" alt /></li>
          <li><img src="images/brand-logo4.png" alt /></li>
          <li><img src="images/brand-logo5.png" alt /></li>
          <li><img src="images/brand-logo6.png" alt /></li>
          <li><img src="images/brand-logo7.png" alt /></li>
          <li><img src="images/brand-logo8.png" alt /></li>
          <li><img src="images/brand-logo9.png" alt /></li>
          <li><img src="images/brand-logo10.png" alt /></li>
          <li><img src="images/brand-logo11.png" alt /></li>
          <li><img src="images/brand-logo12.png" alt /></li>
          <li><img src="images/brand-logo13.png" alt /></li>
          <li><img src="images/brand-logo14.png" alt /></li>
        </ul>
      </div>
    </div>
  </div>
  {/*Featured Brands logo End*/} 
  {/*Footer Start*/}
  <footer className="footer">
    <div className="newsletter-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="newsletter-col"> <i><img src="images/news-icon.png" alt /></i>
              <div className="newsletter-heading">
                <h2>SIGN UP FOR NEWSLETTER</h2>
                <p>&amp; Receive 10% Off On Your Orders</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="newsletter-inp">
              <input name type="text" className="form-control" placeholder="Your Email Address" />
              <button type="button" className="btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ecommerce-service">
      <div className="container">
        <ul>
          <li> <i><img src="images/ecommerce-icon6.png" alt /></i>
            <div className="ecom-info"> <strong>FREE SHIPPING<br />
                ON ALL ORDER</strong> </div>
          </li>
          <li> <i><img src="images/ecommerce-icon7.png" alt /></i>
            <div className="ecom-info"> <strong>MONEY BACK <br />
                GUARANTEE</strong> </div>
          </li>
          <li> <i><img src="images/ecommerce-icon8.png" alt /></i>
            <div className="ecom-info"> <strong>SAFE SHOPPING <br />
                GUARANTEE</strong> </div>
          </li>
          <li> <i><img src="images/ecommerce-icon9.png" alt /></i>
            <div className="ecom-info"> <strong>ONLINE SUPPORT<br />
                24H ON DAY</strong> </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-top relative">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <h4>CONTACT US</h4>
            <div className="icon-content"> <i><img src="images/address.png" alt /></i> <span className="ft-title">ADDRESS:</span>
              <p>Shopping cart website <br />
                Unit 2, 6 Money Close, Rouse Hill NSW 2155 Australia</p>
            </div>
            <div className="icon-content"> <i><img src="images/email.png" alt /></i> <span className="ft-title">Email</span>
              <p>sales@websitename.com</p>
            </div>
            <div className="icon-content"> <i><img src="images/phone.png" alt /></i> <span className="ft-title">Phone</span>
              <p>+61 (02) 9620 4000</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4>KNOW YOUR STORE</h4>
            <ul>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">OUR PRODUCTS</a></li>
              <li><a href="#">RETURN POLICY</a></li>
              <li><a href="#">CUSTOMER SERVICE</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4>TOP CATEGORIES</h4>
            <ul>
              <li><a href="#">Outdoor Covers</a></li>
              <li><a href="#">Indoor Covers</a></li>
              <li><a href="#">Indoor Covers</a></li>
              <li><a href="#">Specialty Covers</a></li>
              <li><a href="#">Walkinshaw Car Covers</a></li>
              <li><a href="#">Car Cover Accessories</a></li>
              <li><a href="#">Motorcycle Covers</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4>LATEST NEWS</h4>
            <div className="latest-news-col">
              <div className="news-col">
                <div className="news-img"><img src="images/news-img.jpg" alt /></div>
                <div className="news-summery">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>2018-06-19</span> </div>
              </div>
              <div className="news-col">
                <div className="news-img"><img src="images/news-img2.jpg" alt /></div>
                <div className="news-summery">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>2018-06-19</span> </div>
              </div>
              <div className="news-col">
                <div className="news-img"><img src="images/news-img3.jpg" alt /></div>
                <div className="news-summery">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>2018-06-19</span> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social text-center"> <a href="#"><i className="fab fa-facebook-f" /></a> <a href="#"><i className="fab fa-twitter" /></a> <a href="#"><i className="fab fa-google-plus-g" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a> <a href="#"><i className="fab fa-youtube" /></a> </div>
      </div>
    </div>
    <div className="footer-btm">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-wrap flex-md-nowrap justify-content-md-between">
          <div className="ft-left"> Copyright © 2021 AUS Baba. <a href="#">Privacy Policy</a> | <a href="#">Terms &amp; Conditions</a> </div>
          <div className="ft-right"> <a href="#" className="pay-pal"><img src="images/mestro.png" alt /></a> <a href="#" className="pay-pal"><img src="images/pay-pal.png" alt /></a> <a href="#" className="pay-pal"><img src="images/western-union.png" alt /></a> <a href="#" className="pay-pal"><img src="images/visa.png" alt /></a> <a href="#" className="pay-pal"><img src="images/cirrus.png" alt /></a> <a href="#" className="pay-pal"><img src="images/ebay.png" alt /></a> </div>
        </div>
      </div>
    </div>
  </footer>
</div>


    </>
  )
}

export default Home