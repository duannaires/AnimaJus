import { Link } from "react-router-dom";
import imageArticle from "../../../../../assets/images/themis.jpg"

export function SectionHero() {

  return (
    <div className="pt-4 pb-0 card-grid">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
          <article className="card card-full hover-a mb-4">
            <div className="article-image">
							<Link to="/">
                <img src={imageArticle} alt="Imagem de artigo" loading="lazy" />
              </Link>
						</div>
						<div className="article-info p-3">
              <h1 className="article-info__title h3-sm h1-md h3-lg aj-text-red fw-bold">
                Ativismo Judicial
              </h1>
							<div className="article-info__publication mb-2 text-muted small">
                <span className="article-info__author d-none d-sm-inline me-1 fw-bold">
                  Júlio César
                </span>
                <time className="article-info__date" dateTime="2022-11-30T02:13:05+00:00">
                    30 de novembro de 2022
                </time>
							</div>
              <p className="article-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum nunc, laoreet eget rhoncus vitae, interdum in eros. Duis fringilla elit massa, nec dictum ligula commodo a.</p>
							</div>
            </article>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  )
}

{/* <div id="block-load1" className="tab-content ajax-tabs p-0">
				<!--tabs content-->
				<div className="tab-pane fade show active" id="block-catone1" role="tabpanel" aria-labelledby="cat-navione1">
					<div className="row animate slideInDown">
																			<!--big post-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	
																					<!--thumbnail-->
											
																							</div>
												
																			<!--post right start-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/mir-has-winning-mindset-same-calibre-as-vinales-rins/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-115x80.jpg" className="img-fluid lazy wp-post-image entered loaded" alt="Mir has winning mindset, ‘same calibre as Vinales, Rins’" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px" data-ll-status="loaded">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/mir-has-winning-mindset-same-calibre-as-vinales-rins/">Mir has winning mindset, ‘same calibre as Vinales, Rins’</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:12:03+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/ktm-aprilia-race-riders-join-sepang-shakedown-test-2/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-115x80.jpg" className="img-fluid lazy wp-post-image entered loaded" alt="KTM, Aprilia race riders join Sepang Shakedown test" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px" data-ll-status="loaded">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/ktm-aprilia-race-riders-join-sepang-shakedown-test-2/">KTM, Aprilia race riders join Sepang Shakedown test</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:11:13+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/motogp-gossip-rossi-hints-at-inter-inspired-yamaha-livery/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-115x80.jpg" className="img-fluid lazy wp-post-image entered loaded" alt="MotoGP Gossip: Rossi hints at ‘Inter-inspired’ Yamaha livery" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px" data-ll-status="loaded">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/motogp-gossip-rossi-hints-at-inter-inspired-yamaha-livery/">MotoGP Gossip: Rossi hints at ‘Inter-inspired’ Yamaha livery</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:10:13+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/locatelli-named-as-new-vr46-academy-coach/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-115x80.jpg" className="img-fluid lazy wp-post-image entered loaded" alt="Locatelli named as new VR46 academy coach" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px" data-ll-status="loaded">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/locatelli-named-as-new-vr46-academy-coach/">Locatelli named as new VR46 academy coach</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:09:21+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																							</div>
											</div>
				</div>
				<!--tabs content-->
				<div className="tab-pane fade" id="block-cattwo1" role="tabpanel" aria-labelledby="cat-navitwo1">
					<div className="row animate slideInDown">
																			<!--big post-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<article className="card card-full hover-a mb-4">
																					<!--thumbnail-->
											<div className="ratio_360-202 image-wrapper">
												<a href="https://demo.bootstrap.news/default/2019/06/kilmarnock-miss-chance-to-close-on-celtic-as-they-lose-at-home/">
													<img width="360" height="202" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Kilmarnock miss chance to close on Celtic as they lose at home" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-360x202.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-360x202.jpg 360w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-372x208.jpg 372w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-251x141.jpg 251w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-230x129.jpg 230w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-203x114.jpg 203w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-2347824-165x92.jpg 165w" sizes="(max-width: 360px) 100vw, 360px">    												<!-- post type -->
                                        															</a>
											</div>
																				<div className="card-body">
											<!--title-->
											<h2 className="card-title h3-sm h1-md h3-lg">
												<a href="https://demo.bootstrap.news/default/2019/06/kilmarnock-miss-chance-to-close-on-celtic-as-they-lose-at-home/">Kilmarnock miss chance to close on Celtic as they lose at home</a>
											</h2>
											<div className="card-text mb-2 text-muted small">
											    												<!--author-->
												<span className="fw-bold d-none d-sm-inline me-1">
													<a href="https://demo.bootstrap.news/default/author/aribudin/" title="Posts by Ari Budin" rel="author">Ari Budin</a>												</span>
																								<!--date-->
												<time className="news-date" datetime="2019-06-14T06:58:44+00:00">June 14, 2019</time>
												<!--comments-->
												<span title="0 Comment" className="float-end">
													<span className="icon-comments"></span> 0												</span>
											</div>
											<!--description-->
											<p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line....</p>
										</div>
									</article>
																							</div>
												
																			<!--post right start-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/qatar-beat-japan-to-win-first-asian-cup-highlights-report/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Qatar beat Japan to win first Asian Cup – highlights &amp; report" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1342252-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1342252-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1342252-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1342252-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1342252-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/qatar-beat-japan-to-win-first-asian-cup-highlights-report/">Qatar beat Japan to win first Asian Cup – highlights &amp; report</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-14T06:14:22+00:00">June 14, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/fans-celebrate-in-paris-after-side-reaches-world-cup-final/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Fans celebrate in Paris after side reaches World Cup final" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1557456275-5bfe3c02223f-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1557456275-5bfe3c02223f-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1557456275-5bfe3c02223f-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1557456275-5bfe3c02223f-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1557456275-5bfe3c02223f-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/fans-celebrate-in-paris-after-side-reaches-world-cup-final/">Fans celebrate in Paris after side reaches World Cup final</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-14T06:12:10+00:00">June 14, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/football-daily-podcast-crouch-batshuayi-and-tielemans/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Football Daily podcast: Crouch, Batshuayi and Tielemans" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1504305754058-2f08ccd89a0a-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1504305754058-2f08ccd89a0a-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1504305754058-2f08ccd89a0a-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1504305754058-2f08ccd89a0a-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/photo-1504305754058-2f08ccd89a0a-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/football-daily-podcast-crouch-batshuayi-and-tielemans/">Football Daily podcast: Crouch, Batshuayi and Tielemans</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-14T06:05:47+00:00">June 14, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/back-from-the-dead-parma-embraces-a-football-school-arena/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Back From the Dead, Parma Embraces a Football School arena" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-262524-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-262524-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-262524-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-262524-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-262524-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/back-from-the-dead-parma-embraces-a-football-school-arena/">Back From the Dead, Parma Embraces a Football School arena</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-13T08:35:42+00:00">June 13, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																							</div>
											</div>
				</div>
				<!--tabs content-->
				<div className="tab-pane fade" id="block-catthree1" role="tabpanel" aria-labelledby="cat-navithree1">
					<div className="row animate slideInDown">
																			<!--big post-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<article className="card card-full hover-a mb-4">
																					<!--thumbnail-->
											<div className="ratio_360-202 image-wrapper">
												<a href="https://demo.bootstrap.news/default/2019/06/kia-mvp-ladder-time-may-be-ticking-for-lebron-to-get-back-in-chase/">
													<img width="360" height="202" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Kia MVP Ladder: Time may be ticking for LeBron to get back in chase" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-360x202.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-360x202.jpg 360w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-372x208.jpg 372w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-251x141.jpg 251w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-230x129.jpg 230w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-203x114.jpg 203w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-1511298_1920-165x92.jpg 165w" sizes="(max-width: 360px) 100vw, 360px">    												<!-- post type -->
                                        															</a>
											</div>
																				<div className="card-body">
											<!--title-->
											<h2 className="card-title h3-sm h1-md h3-lg">
												<a href="https://demo.bootstrap.news/default/2019/06/kia-mvp-ladder-time-may-be-ticking-for-lebron-to-get-back-in-chase/">Kia MVP Ladder: Time may be ticking for LeBron to get back in chase</a>
											</h2>
											<div className="card-text mb-2 text-muted small">
											    												<!--author-->
												<span className="fw-bold d-none d-sm-inline me-1">
													<a href="https://demo.bootstrap.news/default/author/aribudin/" title="Posts by Ari Budin" rel="author">Ari Budin</a>												</span>
																								<!--date-->
												<time className="news-date" datetime="2019-06-15T06:04:48+00:00">June 15, 2019</time>
												<!--comments-->
												<span title="0 Comment" className="float-end">
													<span className="icon-comments"></span> 0												</span>
											</div>
											<!--description-->
											<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. Contrary to popular belief, Lorem Ipsum is...</p>
										</div>
									</article>
																							</div>
												
																			<!--post right start-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/behind-the-scenes-of-the-anthony-davis-trade-talks/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Behind the scenes of the Anthony Davis trade talks" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080884-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080884-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080884-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080884-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080884-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/behind-the-scenes-of-the-anthony-davis-trade-talks/">Behind the scenes of the Anthony Davis trade talks</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-15T06:00:25+00:00">June 15, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/what-top-davis-trade-contenders-can-actually-offer/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="What top Davis trade contenders can actually offer" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080882-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080882-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080882-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080882-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080882-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/what-top-davis-trade-contenders-can-actually-offer/">What top Davis trade contenders can actually offer</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-15T05:50:41+00:00">June 15, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/do-you-even-watch-basketball-guess-that-all-star/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Do you even watch basketball? Guess that All-Star" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080883-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080883-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080883-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080883-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-1080883-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/do-you-even-watch-basketball-guess-that-all-star/">Do you even watch basketball? Guess that All-Star</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-15T05:43:54+00:00">June 15, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/how-nba-players-reacted-to-the-shocking-kristaps-porzingis-trade/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="How NBA players reacted to the shocking Kristaps Porzingis trade" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-90904_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-90904_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-90904_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-90904_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/basketball-90904_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/how-nba-players-reacted-to-the-shocking-kristaps-porzingis-trade/">How NBA players reacted to the shocking Kristaps Porzingis trade</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-15T05:35:07+00:00">June 15, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																							</div>
											</div>
				</div>
				<!--tabs content-->
				<div className="tab-pane fade" id="block-catfour1" role="tabpanel" aria-labelledby="cat-navifour1">
					<div className="row animate slideInDown">
																			<!--big post-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<article className="card card-full hover-a mb-4">
																					<!--thumbnail-->
											<div className="ratio_360-202 image-wrapper">
												<a href="https://demo.bootstrap.news/default/2019/06/motogp-which-team-needs-what-in-2019/">
													<img width="360" height="202" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="MotoGP: Which team needs what in 2019?" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-360x202.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-360x202.jpg 360w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-372x208.jpg 372w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-251x141.jpg 251w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-230x129.jpg 230w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-203x114.jpg 203w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motocycle-2101565_1920-165x92.jpg 165w" sizes="(max-width: 360px) 100vw, 360px">    												<!-- post type -->
                                        															</a>
											</div>
																				<div className="card-body">
											<!--title-->
											<h2 className="card-title h3-sm h1-md h3-lg">
												<a href="https://demo.bootstrap.news/default/2019/06/motogp-which-team-needs-what-in-2019/">MotoGP: Which team needs what in 2019?</a>
											</h2>
											<div className="card-text mb-2 text-muted small">
											    												<!--author-->
												<span className="fw-bold d-none d-sm-inline me-1">
													<a href="https://demo.bootstrap.news/default/author/aribudin/" title="Posts by Ari Budin" rel="author">Ari Budin</a>												</span>
																								<!--date-->
												<time className="news-date" datetime="2019-06-16T02:13:05+00:00">June 16, 2019</time>
												<!--comments-->
												<span title="4 Comments" className="float-end">
													<span className="icon-comments"></span> 4												</span>
											</div>
											<!--description-->
											<p className="card-text">This study examines the classroom talk about models and modelling of two secondary science teachers implementing a model-based inquiry instructional unit. The goal...</p>
										</div>
									</article>
																							</div>
												
																			<!--post right start-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/mir-has-winning-mindset-same-calibre-as-vinales-rins/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Mir has winning mindset, ‘same calibre as Vinales, Rins’" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorcycle-racer-597913_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/mir-has-winning-mindset-same-calibre-as-vinales-rins/">Mir has winning mindset, ‘same calibre as Vinales, Rins’</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:12:03+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/ktm-aprilia-race-riders-join-sepang-shakedown-test-2/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="KTM, Aprilia race riders join Sepang Shakedown test" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/lorenzo-833726_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/ktm-aprilia-race-riders-join-sepang-shakedown-test-2/">KTM, Aprilia race riders join Sepang Shakedown test</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:11:13+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/motogp-gossip-rossi-hints-at-inter-inspired-yamaha-livery/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="MotoGP Gossip: Rossi hints at ‘Inter-inspired’ Yamaha livery" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/bmw-k-1300-metallic-motorcycle-40904-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/motogp-gossip-rossi-hints-at-inter-inspired-yamaha-livery/">MotoGP Gossip: Rossi hints at ‘Inter-inspired’ Yamaha livery</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:10:13+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/locatelli-named-as-new-vr46-academy-coach/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Locatelli named as new VR46 academy coach" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/motorbike-438464_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/locatelli-named-as-new-vr46-academy-coach/">Locatelli named as new VR46 academy coach</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T02:09:21+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																							</div>
											</div>
				</div>
				<!--tabs content-->
				<div className="tab-pane fade" id="block-catfive1" role="tabpanel" aria-labelledby="cat-navifive1">
					<div className="row animate slideInDown">
																			<!--big post-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<article className="card card-full hover-a mb-4">
																					<!--thumbnail-->
											<div className="ratio_360-202 image-wrapper">
												<a href="https://demo.bootstrap.news/default/2019/06/bowens-super-bowl-liii-game-plans-which-defense-will-get-stops/">
													<img width="360" height="202" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Bowen’s Super Bowl LIII game plans: Which defense will get stops?" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-360x202.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-360x202.jpg 360w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-372x208.jpg 372w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-251x141.jpg 251w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-230x129.jpg 230w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-203x114.jpg 203w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/quarterback-67701_1280-165x92.jpg 165w" sizes="(max-width: 360px) 100vw, 360px">    												<!-- post type -->
                                        															</a>
											</div>
																				<div className="card-body">
											<!--title-->
											<h2 className="card-title h3-sm h1-md h3-lg">
												<a href="https://demo.bootstrap.news/default/2019/06/bowens-super-bowl-liii-game-plans-which-defense-will-get-stops/">Bowen’s Super Bowl LIII game plans: Which defense will get stops?</a>
											</h2>
											<div className="card-text mb-2 text-muted small">
											    												<!--author-->
												<span className="fw-bold d-none d-sm-inline me-1">
													<a href="https://demo.bootstrap.news/default/author/aribudin/" title="Posts by Ari Budin" rel="author">Ari Budin</a>												</span>
																								<!--date-->
												<time className="news-date" datetime="2019-06-16T02:00:40+00:00">June 16, 2019</time>
												<!--comments-->
												<span title="0 Comment" className="float-end">
													<span className="icon-comments"></span> 0												</span>
											</div>
											<!--description-->
											<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. Contrary to popular belief, Lorem Ipsum is...</p>
										</div>
									</article>
																							</div>
												
																			<!--post right start-->
							<div className="col-sm-6 col-md-12 col-lg-6">
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/how-rams-dt-aaron-donald-became-the-nfls-most-unstoppable/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="How Rams DT Aaron Donald became the NFL’s most unstoppable" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-888015_1920-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-888015_1920-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-888015_1920-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-888015_1920-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-888015_1920-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/how-rams-dt-aaron-donald-became-the-nfls-most-unstoppable/">How Rams DT Aaron Donald became the NFL’s most unstoppable</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T01:59:44+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/drew-brees-historic-season-from-the-15-saints-who-caught-his-td-passes/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Drew Brees’ historic season from the 15 Saints who caught his TD passes" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-718952-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-718952-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-718952-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-718952-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-718952-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/drew-brees-historic-season-from-the-15-saints-who-caught-his-td-passes/">Drew Brees’ historic season from the 15 Saints who caught his TD passes</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T01:58:49+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/julius-peppers-should-be-no-brainer-as-first-ballot-hall-of-famer/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="Julius Peppers should be ‘no-brainer’ as first-ballot Hall of Famer" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-186076-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-186076-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-186076-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-186076-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/pexels-photo-186076-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/julius-peppers-should-be-no-brainer-as-first-ballot-hall-of-famer/">Julius Peppers should be ‘no-brainer’ as first-ballot Hall of Famer</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-16T01:57:42+00:00">June 16, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																	<!--post list-->
									<article className="card card-full hover-a mb-4">
										<div className="row">
											<!--thumbnail-->
											<div className="col-3 col-md-4 pe-2 pe-md-0">
																									<div className="ratio_115-80 image-wrapper">
														<a href="https://demo.bootstrap.news/default/2019/06/how-julian-edelman-became-tom-bradys-little-brother/">
															<img width="115" height="80" src="https://demo.bootstrap.news/default/wp-content/themes/bootnews/assets/img/assets/lazy-empty.png" className="img-fluid lazy wp-post-image" alt="How Julian Edelman became Tom Brady’s ‘little brother’" loading="lazy" data-src="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-801047_1280-115x80.jpg" srcset="https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-801047_1280-115x80.jpg 115w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-801047_1280-180x123.jpg 180w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-801047_1280-99x68.jpg 99w, https://demo.bootstrap.news/default/wp-content/uploads/2019/06/football-801047_1280-110x77.jpg 110w" sizes="(max-width: 115px) 100vw, 115px">    														<!-- post type -->
                                                																	</a>
													</div>
																							</div>
											<div className="col-9 col-md-8">
												<div className="card-body pt-0">
													<!--title-->
													<h3 className="card-title h6 h4-md h6-lg">
														<a href="https://demo.bootstrap.news/default/2019/06/how-julian-edelman-became-tom-bradys-little-brother/">How Julian Edelman became Tom Brady’s ‘little brother’</a>
													</h3>
													<!--date-->
													<div className="card-text small text-muted">
														<time className="news-date" datetime="2019-06-15T22:57:34+00:00">June 15, 2019</time>
													</div>
												</div>
											</div>
										</div>
									</article>
																							</div>
											</div>
				</div>
				<!-- end tabs content-->
			</div> */}