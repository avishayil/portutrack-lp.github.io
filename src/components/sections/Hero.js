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
                document.documentElement.dir = i18n.dir()                
              }}>English</a>
              {/* <span onClick={() =>{
                i18n.changeLanguage('he')
                document.documentElement.dir = i18n.dir()                
              }}>עברית</span> */}
              <a className="button" href="#" onClick={() =>{
                i18n.changeLanguage('pt-BR')
                document.documentElement.dir = i18n.dir()                
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
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
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