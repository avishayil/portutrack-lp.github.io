import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import { useTranslation } from 'react-i18next';
import i18n from '../../translation';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const { t } = useTranslation();

  const changeDir = (direction) => {
    let splitItemContent = document.getElementsByClassName('split-item-content');
    let i;
    for(i = 0; i < splitItemContent.length; i++) {
      splitItemContent[i].style.textAlign = direction;
    }
  }

  if (i18n.dir() == 'rtl') {
    changeDir('right')
  } else {
    changeDir('left')
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 64 }}>
              <a className="button" href="#" onClick={() =>{
                i18n.changeLanguage('en')
                changeDir('left')
              }}>English</a>
              <a className="button" href="#" onClick={() =>{
                i18n.changeLanguage('he')
                changeDir('right')
              }}>עברית</a>
              <a className="button" href="#" onClick={() =>{
                i18n.changeLanguage('pt-BR')
                changeDir('left')
              }}>Português</a>
            </div>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Portugal<span className="text-color-primary">Tracker</span> - {t('hero.subtitle')}
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                {t('hero.paragraph')}
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://app.portugaltracker.com/" target="_blank">
                    {t('hero.button')}
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-delay="800">
            <Image
              src={require('./../../assets/images/product-main-en.png')}
              alt="Hero"
              width={896}
              height={504} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;