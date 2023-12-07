

const Hero = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img src="https://images.pexels.com/photos/9402606/pexels-photo-9402606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            <div className="h-96 carousel carousel-vertical rounded-box">
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">Food Heaven</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;