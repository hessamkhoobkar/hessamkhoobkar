<template>
  <Layout>

    <div class="my-hero">
      <div class="my-hero__image">
        <g-image src="~/assets/images/hessamKhoobkar-bg.jpg" alt="hessam khoobkar" fit="inside"/>
      </div>
      <div class="my-hero__info">
          <p class="my-hero__title h1">Hi,<br>I’m hessam khoobkar</p>
          <p>
            I’m a UI / UX designer and front end developer.<br>    
            I feel lucky to be part of the development teams and help them to produce better user interfaces. 
            I design and develop UI components and layouts and hand them to talented programmers to go and do great things with them.
          </p>
      </div>
    </div>
    <div class="content-box">
      <p>
        I fail at my work. At the beginning of every new project, options are endless. None of them wrong. 
        It's a collection of relative and relevant decisions toward the intentions of the project that produces an amicable design system. 
        So I fail and rebuild better than fail again to rebuilding it more aligned with the purposes of the project.
      </p>
      <p>
        I’m an avid believer that less is more. The UI should not be loud and annoying. 
        It should be subtle. To help and guide the user. The design should be built around the content, not the other way around. 
      </p>
      <p>
        My process modeled after the famous double diamond visualization. 
        This visualization breaks the processes into four main stages. 
        It helps to create a conveyable roadmap and puts stakeholders and me on the same page. 
      </p>
      <g-image src="~/assets/images/double_diamond_base-100.jpg" alt="Double Diamond framework visualization"/>
      <p>
        Even though my process modeled after double diamond, It is not the same. 
        First, every stage has multiple smaller steps to take on and milestones to achieve. 
        These steps will differ depending on the needs of every project. 
        Second, not all these stages needed when I'm joining the project. 
        To give you an idea, I am going to use a previous project I took on.
      </p>
      <p>
        When I joined this project, the team had a working design for the application. 
        There was a content strategy. So my discovery and defining process were different. 
        The company was using the product too. 
        With the help of the customer support team, the company was the best testing environment for rapid deployment. 
        By relying on the best practices in UI design, I decided to cut the wireframing process short and go directly to the prototyping. 
        The final process looked something like this.
      </p>
      <g-image src="~/assets/images/double_diamond_Mine-100.jpg" alt="My version of Double Diamond framework visualization"/>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
  .my-hero {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: var(--layout-4x);

    &__image {
      width: 80%;
    }
    &__info {
      position: absolute;
      right: var(--layout-1x);
      top: var(--layout-6x);
      width: 30rem;
      padding: var(--text-2x);
      background: var(--natural-00);
      box-shadow: 0 1px 1px rgba(110, 120, 132,0.15), 
              0 2px 2px rgba(110, 120, 132,0.15), 
              0 4px 4px rgba(110, 120, 132,0.15), 
              0 8px 8px rgba(110, 120, 132,0.15);
    }
    &__title {
      margin-bottom: var(--spacing-0-5);
      color: var(--primary);
    }
  }

  .content-box {
    
    & img {
      margin: 0.5rem 0 2rem 0;

      margin-top: var(--spacing-0-25);
      margin-bottom: var(--spacing-0-75);
    }
  }

</style>

