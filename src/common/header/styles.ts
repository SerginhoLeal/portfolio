import styled, { css } from 'styled-components';

interface NavigationProps {
  step: 'hello' | 'about' | 'skill' | 'experience';
};

export const Container = styled.div`
  position: relative;
  display: flex;

  height: 50px;

  background-color: #FFFFFF;
  box-shadow: 1px 1px 5px #DEDEDE;

  padding: 0 50px;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  };
`;

export const Navigation = styled.nav<NavigationProps>`
  position: relative;
  /* width: 100%; */

  display: flex;
  align-items: center;

  margin-left: 90px;

  a {
    padding: 40px;
    color: #888888;
    text-decoration: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
  };

  span {
    position: absolute;
    
    width: 90px;
    height: 2px;
    
    background-color: #FF674D;

    bottom: 0;

    transition: .5s;
    ${({ step }) => css`

      ${step === 'hello' && css`
        left: 15px;
        width: 80px;
      `};

      ${step === 'about' && css`
        left: 140px;
        width: 95px;
      `};

      ${step === 'skill' && css`
        left: 284px;
        width: 70px;
      `};

      ${step === 'experience' && css`
        left: 405px;
        width: 100px;
      `};

    `};
  };

  @media screen and (max-width: 900px) {
    a {
      padding: 20px;
    };

    span {
      width: 50px;
      height: 2px;

      ${({ step }) => css`

        ${step === 'hello' && css`
          left: 12px;
          width: 50px;
        `};

        ${step === 'about' && css`
          left: 83px;
          width: 90px;
        `};

        ${step === 'skill' && css`
          left: 196px;
          width: 50px;
        `};

        ${step === 'experience' && css`
          left: 270px;
          width: 90px;
        `};

      `};
    };
  };

  @media screen and (max-width: 500px) {
    /* a {
      padding: 20px;
    }; */

    /* span {
      width: 50px;
      height: 2px;

      ${({ step }) => css`

        ${step === 'hello' && css`
          left: 12px;
          width: 50px;
        `};

        ${step === 'about' && css`
          left: 83px;
          width: 90px;
        `};

        ${step === 'skill' && css`
          left: 196px;
          width: 50px;
        `};

        ${step === 'experience' && css`
          left: 270px;
          width: 90px;
        `};

      `};
    }; */
  };
`;