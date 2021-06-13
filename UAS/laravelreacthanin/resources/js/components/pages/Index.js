import React from 'react'
import BlogWidget from '../common/BlogWidget'

import SideImage from '../../../../public/assets/images/1.jpg'

const Home = () => {
    return (
        <div className="container m-top-60">
            <div className="row">
                <div className="col-md-8 col-sm-12 post-list">
                    <div className="post-item">
                        <div className="post-content">
                            <h4>Selamat Datang di Website Laravel dan React Blog Hanin</h4>
                            <hr/>
                            <p className="justify">
                                <img src={SideImage} className="img-thumbnail" width="300" alt=""/>
                                Ini adalah website laravel dan react
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 sidebar">
                    <div className="widget">
                        <h4 className="widget-title">Notice Board</h4>
                        <hr/>
                        <div className="recent-post-widget">
                            <BlogWidget category="Latest News" limit="5" layout="list"/>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog-section spad">
                <div className="row">
                    <div className="col-md-12 col-sm-12 section-title text-center">
                        <h3>Latest News</h3>
                        <p></p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <BlogWidget category="Latest News" limit="4" layout="grid"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home