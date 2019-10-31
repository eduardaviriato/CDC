
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class CDC extends Component { 
    myFunction=(event)=>{
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("nav");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
      }
 
  render(){
  return (

    <div className="App">
      
<div id="flipkart-navbar">
    <div class="container">
        <div class="row row1">
            <ul class="largenav pull-right">
                <li class="upper-links dropdown"><a class="links" href="#/">
                <img src="dh.png" width="30px" height="30px" />Pedidos</a>
                    <ul class="dropdown-menu">
                        <li class="profile-li"><a class="profile-links" href="#">(85)99118328</a></li>
                        <li class="profile-li"><a class="profile-links" href="#/">(85)99118328</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row2">
            <div class="col-sm-2">
                <h1 className="h"><span class="largenav">CDC</span></h1>
            </div>
            <div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
                <div class="row">
                    <input class="flipkart-navbar-input col-xs-11" type="" id="myInput" onChange={this.myFunction} placeholder="Search " name=""/>
                    <button class="flipkart-navbar-button col-xs-1">
                        <svg width="15px" height="15px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="cart largenav col-sm-2">
                <a class="cart-button">
                    <svg class="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                        <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                    </svg> Carro
                    <span class="item-number ">0</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="container">
    <div class="shadow" id="myUL">
		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
				<a href="#" class="nohover"><img src="r15.jpeg" />
				<span>Rapadura Batida (250g) Fardo com 25 unidades</span>
                
				
			</a>
            </nav>          
           
		</div>
		</div>
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
				<a href="#" class="nohover"><img src="r02.jpeg" />
				<span>Rapadura Natural (200g) Fardo com 25 unidades</span> </a>
			</nav>
			
		</div>
		</div>
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
				<a href="#" class="nohover"><img src="r03.jpeg" />
				<span>Rapadura Coco (400g) Fardo com 25 unidades</span></a>
			</nav>
			
		</div>
		</div>
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor" id="my">
				<a href="#" class="nohover"><img src="r04.jpeg" />
				<span>Rapadura Natural (400g) Fardo com 25 unidades</span></a>
			</nav>
		</div>
		</div>
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
				<a href="#" class="nohover"><img src="r05.jpeg" />
				<span>Rapadura Preta (400g) Fardo com 10 unidades</span></a>
			</nav>
		</div>
		</div>
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
							<a href="#" class="nohover"><img src="r06.jpeg"  />
				<span> Coco e Amendoim (400g) Fardo com 25 unidades</span></a>
			</nav>
		</div>
		</div>
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
								<a href="#" class="nohover"><img src="r07.jpeg" />
				<span>Rapadura Natural (1200g) Fardo com 7 unidades</span></a>
			</nav>
		</div>
		</div>
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="box-customn">
			<nav class="img-wrap-tailor">
							<a href="#" class="nohover"><img src="r08.jpeg"  />
				<span>Rapadura Coco (500g) Fardo com 25 unidades</span></a>
			</nav>
		</div>
		</div>
		
	</div>
	</div>
</div>
</div>
  );
}
}

export default CDC;
