import React, { Component } from 'react';
import TopBar from '../components/topbar';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='landing'>
        <div className='off-canvas-wrapper'>
          <div className='off-canvas-wrapper-inner' data-off-canvas-wrapper>
            <div className='off-canvas position-left black' id='offCanvas' data-off-canvas>

              {/* -- Close button --> */}
              <div>
                <h4>Options</h4>
                <button className='close-button' aria-label='Close menu' type='button' data-close>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>

              {/*  -- Menu -->  */}
              <ul className='vertical menu' data-drilldown>
                <li>
                  <a>Item 1</a>
                  <ul className='vertical accordion menu'>
                    <li><a href='#'>Item 1A</a></li>
                    <li><a href='#'>Item 1B</a></li>
                    <li><a href='#'>Item 1C</a></li>
                    <li><a href='#'>Item 1D</a></li>
                    <li><a href='#'>Item 1E</a></li>
                  </ul>
                </li>
                <li>
                  <a>Item 2</a>
                  <ul className='vertical menu'>
                    <li><a href='#'>Item 2A</a></li>
                    <li><a href='#'>Item 2B</a></li>
                    <li><a href='#'>Item 2C</a></li>
                    <li><a href='#'>Item 2D</a></li>
                    <li><a href='#'>Item 2E</a></li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                  <ul className='vertical menu'>
                    <li><a href='#'>Item 3A</a></li>
                    <li><a href='#'>Item 3B</a></li>
                    <li><a href='#'>Item 3C</a></li>
                    <li><a href='#'>Item 3D</a></li>
                    <li><a href='#'>Item 3E</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className='off-canvas-content' data-off-canvas-content>
              {/* -- Page content-- */}
              <TopBar />
              <h1 >Landing Page</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* <li>
            <a>Item 5</a>
            <ul class='submenu menu vertical accordion' data-submenu='accordion'>
              <li class='accordion-item is-active' data-accordion-item>
                <a href='#' class='accordion-title'>Accordion 1</a>
                <div class='accordion-content' data-tab-content>
                  I would start
                </div>
              </li>
              <li class='accordion-item ' data-accordion-item>
                <a href='#' class='accordion-title">Accordion 2</a>
                <div class="accordion-content" data-tab-content>
                  I would start #2
                </div>
              </li>
              <li class="accordion-item " data-accordion-item>
                <a href="#" class="accordion-title">Accordion 3</a>
                <div class="accordion-content" data-tab-content>
                  I would start #3
                </div>
              </li>
            </ul>
          </li> */
