import React from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./home.css";
import PetPhoto from "../../assets/pet-photo.png";
import { ReactComponent as SiteLogo } from "../../assets/paw-solid.svg";

function Home() {
  return (
    <div>
      <HomeNavigationBar></HomeNavigationBar>
      <section className="landing-content">
        <div className="landing-content">
          <div className="landing-content-container">
            <h1 className="landing-content-header">Welcome to Pawpals</h1>
            <p className="landing-content-text">
              Discover the world of adorable pets. Find your perfect match or
              share the joy of pet ownership with responsible families.
            </p>
            <div>
              <button className="btn">Find Pet</button>{" "}
              <button className="btn">Find Home</button>
            </div>
          </div>
          <div>
            <img className="landing-image" src={PetPhoto} alt="Pet photo" />
          </div>
        </div>
      </section>
      <section className="pet-gallery">
        <div className="pet-gallery-container">
          <h2 className="pet-gallery-header">
            Take a look at some of our pets
          </h2>
          <button className="btn find-more-pet">View more</button>
          <div className="pet-listing-card"></div>
          <div style={{ width: 1180, height: 378, position: "relative" }}>
            <div
              style={{
                width: 280,
                height: 378,
                left: 300,
                top: 0,
                position: "absolute",
                background: "#FDFDFD",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  paddingTop: 8,
                  paddingBottom: 20,
                  paddingLeft: 8,
                  paddingRight: 8,
                  left: 8,
                  top: 272,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#00171F",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    MO231 - Pomeranian White
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Gene:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Male
                      </div>
                    </div>
                    <div></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Age:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        02 months
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 248,
                      color: "#00171F",
                      fontSize: 14,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 20,
                      wordWrap: "break-word",
                    }}
                  >
                    299 USD
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 264,
                  height: 264,
                  left: 8,
                  top: 8,
                  position: "absolute",
                  background: "#DEDEDE",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    left: 94,
                    top: 120,
                    position: "absolute",
                    textAlign: "center",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    lineHeight: 24,
                    letterSpacing: 0.24,
                    wordWrap: "break-word",
                  }}
                >
                  Photo
                </div>
                <div
                  style={{
                    width: 261.8,
                    height: 260,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "1px black solid",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                width: 280,
                height: 378,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#FDFDFD",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  paddingTop: 8,
                  paddingBottom: 20,
                  paddingLeft: 8,
                  paddingRight: 8,
                  left: 8,
                  top: 272,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#00171F",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    MO231 - Pomeranian White
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Gene:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Male
                      </div>
                    </div>
                    <div></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Age:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        02 months
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 248,
                      color: "#00171F",
                      fontSize: 14,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 20,
                      wordWrap: "break-word",
                    }}
                  >
                    299 USD
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 264,
                  height: 264,
                  left: 8,
                  top: 8,
                  position: "absolute",
                  background: "#DEDEDE",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    left: 94,
                    top: 120,
                    position: "absolute",
                    textAlign: "center",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    lineHeight: 24,
                    letterSpacing: 0.24,
                    wordWrap: "break-word",
                  }}
                >
                  Photo
                </div>
                <div
                  style={{
                    width: 261.8,
                    height: 260,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "1px black solid",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                width: 280,
                height: 378,
                left: 600,
                top: 0,
                position: "absolute",
                background: "#FDFDFD",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  paddingTop: 8,
                  paddingBottom: 20,
                  paddingLeft: 8,
                  paddingRight: 8,
                  left: 8,
                  top: 272,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#00171F",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    MO231 - Pomeranian White
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Gene:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Male
                      </div>
                    </div>
                    <div></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Age:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        02 months
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 248,
                      color: "#00171F",
                      fontSize: 14,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 20,
                      wordWrap: "break-word",
                    }}
                  >
                    299 USD
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 264,
                  height: 264,
                  left: 8,
                  top: 8,
                  position: "absolute",
                  background: "#DEDEDE",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    left: 94,
                    top: 120,
                    position: "absolute",
                    textAlign: "center",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    lineHeight: 24,
                    letterSpacing: 0.24,
                    wordWrap: "break-word",
                  }}
                >
                  Photo
                </div>
                <div
                  style={{
                    width: 261.8,
                    height: 260,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "1px black solid",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                width: 280,
                height: 378,
                left: 900,
                top: 0,
                position: "absolute",
                background: "#FDFDFD",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  paddingTop: 8,
                  paddingBottom: 20,
                  paddingLeft: 8,
                  paddingRight: 8,
                  left: 8,
                  top: 272,
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 4,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#00171F",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    MO231 - Pomeranian White
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Gene:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Male
                      </div>
                    </div>
                    <div></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        Age:
                      </div>
                      <div
                        style={{
                          color: "#667479",
                          fontSize: 12,
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          lineHeight: 18,
                          wordWrap: "break-word",
                        }}
                      >
                        02 months
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 248,
                      color: "#00171F",
                      fontSize: 14,
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: 20,
                      wordWrap: "break-word",
                    }}
                  >
                    299 USD
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 264,
                  height: 264,
                  left: 8,
                  top: 8,
                  position: "absolute",
                  background: "#DEDEDE",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    left: 94,
                    top: 120,
                    position: "absolute",
                    textAlign: "center",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    lineHeight: 24,
                    letterSpacing: 0.24,
                    wordWrap: "break-word",
                  }}
                >
                  Photo
                </div>
                <div
                  style={{
                    width: 261.8,
                    height: 260,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "1px black solid",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-background">
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-logo">
              <SiteLogo />
            </h3>
            <p className="footer-text">
              Pawpals is a platform that connects pet lovers with pets. We
              believe that pets are family and that every pet deserves a loving
              home.
            </p>
          </div>
          <div className="footer-mid">
            <h3>Site Navigation</h3>
            <ul>
              <li>Home</li>
              <li>Find Pet</li>
              <li>Find Home</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="footer-header">Contact Us</h3>
            <p className="footer-text">Email: info@pawsomepets.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
