import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
         <nav class="navbar navbar-white bg-black navbar-expand-lg ">
            <div class="container">
                <Link class='text-decoration-none' to={'/'}>
                <img src='./Images/Media/rsmedia.jpg' height={80} width={80} class='rounded mx-1'/>
                </Link>
                <Link class='text-decoration-none ' to={'/'}>
                <a class="navbar-brand text-white" href="# ">RS MEDIA</a>
                </Link>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#ull">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="ull">
                    
                    <ul class="navbar-nav ms-auto">
                        <Link class='text-decoration-none' to={'/'}>
                        <li class="nav-item me-5"><a class="nav-link active text-white" href="">Home</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/About'}>
                        <li class="nav-item me-5"><a class="nav-link text-white" href="">About Us</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/Contact'}>
                        <li class="nav-item me-5"><a class="nav-link text-white" href="">Contact Us</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/Packages'}>
                        <li class="nav-item me-5"><a class="nav-link text-white" href="">Packages</a></li>
                        </Link>
                       <div class="btn-group">
                            <button type="button" class="btn btn-white dropdown-toggle text-white me-5" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </button>
                            <ul class="dropdown-menu wid ">
                            <Link class='text-decoration-none' to={'/Baby'}>
                            <li><a class="dropdown-item" href="#">Baby Photoshoot</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Matri'}>
                            <li><a class="dropdown-item" href="#">Matrimonial Photoshoot</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Maternity'}>
                            <li><a class="dropdown-item" href="#">Maternity Photoshoot</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Couples'}>
                            <li><a class="dropdown-item" href="#">Couples Photoshoot</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Family'}>
                            <li><a class="dropdown-item" href="#">Family Photoshoot</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/New'}>
                            <li><a class="dropdown-item" href="#">NewBorn Photoshoot</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Pre'}>
                            <li><a class="dropdown-item" href="#">Pre Wedding</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Wed'}>
                            <li><a class="dropdown-item" href="#">Wedding Photo</a></li>
                            </Link>
                            
                            
                            
                            
                          </ul>
                       </div>
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation