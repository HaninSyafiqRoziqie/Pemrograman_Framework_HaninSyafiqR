import React, { Component } from 'react';
import './BlogPost.css';

const Post = (props)=> {
        return(
            <div className="artikel">
                <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" 
                    alt="Gambar Thumbnail Artikel"/>
                </div>
                <div class="konten-artikel">
                    <div class="judul-artikel">{props.judul}</div>
                    <p className="isi-artikel">{props.isi}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
                </div>
            </div>
            
        )
    }

export default Post;