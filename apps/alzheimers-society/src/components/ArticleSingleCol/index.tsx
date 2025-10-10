import Link from "next/link";
import { Accordian } from "../../../../../packages/components/Accordian";
// import { Button } from "../../../../../packages/ui/src/stories/Button";
import { Hero } from "../Hero";
import { HowWweSupportYou } from "../HowWeSupportYou";
import { LargeLinks } from "../LargeLinks";
import { PrimaryInformation } from "../PrimaryInformation";
import { ShareThisPage } from "../ShareThisPage";
import { ShopItem } from "../ShopItem";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

type ArticleProps = {
  data: Document;
  locale?: string;
  id: string;
};

export const Article = ({ data, locale, id }: ArticleProps) => {
  return (
    <article
      data-history-node-id='961'
      className='node node--type-information-page node--view-mode-full'
    >
      {/* <Button label='Hello wooorld' onClick={() => console.log("cleekd")} /> */}
      {data?.hero?.text.json && data?.hero?.heroImage?.url && (
        <Hero
          content={documentToReactComponents(data.hero?.text.json)}
          image={data.hero?.image.url}
        />
      )}

      <div className='two-column__wrapper container'>
        <div className='row'>
          <div id='main-body-content' className='main-content' tabIndex={-1}>
            {locale === "cy" ? (
              <Link href={`/about-dementia/${id}`}>English version</Link>
            ) : (
              <Link href={`/about-dementia/${id}?locale=cy`}>
                Welsh version
              </Link>
            )}
            {data?.descriptionContent &&
              documentToReactComponents(data?.descriptionContent.json)}
            {data?.fixedContentTitle && (
              <PrimaryInformation
                title={data?.fixedContentTitle}
                content={
                  data?.fixedContentContent
                    ? documentToReactComponents(data?.fixedContentContent.json)
                    : null
                }
              />
            )}

            {data?.largeLinksGroupCollection?.items?.length > 0 && (
              <div className='large-link-blocks container component'>
                <div className='row'>
                  {data?.largeLinksGroupCollection?.items?.map(
                    (item, index) => (
                      <LargeLinks
                        key={index}
                        title={item.largeLinkTitle}
                        link={item.link}
                        content={item.largeLinkText}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {data?.shopCollection?.items.length > 0 && (
              <div className='row'>
                {data.shopCollection.items.map((item, index) => (
                  <ShopItem
                    key={index}
                    image={item.cardTitle_data.featuredImage.url}
                    link={item.cardTitle_data.onlineStoreUrl}
                    title={item.cardTitle_data.title}
                    description={item.cardTitle_data.description}
                  />
                ))}
              </div>
            )}

            <div className='field field--name-field-main-content field--type-entity-reference-revisions field--label-hidden field__items'>
              {data?.articleElementsCollection.items.map((item, index) => {
                if (item.__typename === "Accordian") {
                  return (
                    <Accordian
                      key={index}
                      title={item.title}
                      content={
                        item.content
                          ? documentToReactComponents(item.content.json)
                          : null
                      }
                    />
                  );
                }

                if (item.__typename === "TextField" && item.content) {
                  return (
                    <div
                      key={index}
                      className='text-block component'
                      data-once='textBlock'
                    >
                      {documentToReactComponents(item.content.json)}
                    </div>
                  );
                }

                if (item.__typename === "SupportBox" && item.content) {
                  return (
                    <HowWweSupportYou
                      key={index}
                      title={item.title}
                      content={documentToReactComponents(item.content.json)}
                    />
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='field field--name-field-cta-content field--type-entity-reference-revisions field--label-hidden field__items'>
        <div className='field__item'>
          <div className='tiles-grid component you-may-also-be-interested-in'>
            <div className='container'>
              <h2 className='heading heading--main heading--sub'>
                You may also be interested in
              </h2>
              <div className='tiles-grid__cards row'>
                <div className='col-md-4'>
                  <div className='tile-card-image component--print-outlined'>
                    <div className='field field--name-field-media-image field--type-image field--label-hidden field__item'>
                      {" "}
                      <picture>
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_desktop/public/2023-11/mobile-check-860-x477.webp?itok=FwiTnLd6 1x'
                          media='all and (min-width: 1440px)'
                          type='image/webp'
                          width='414'
                          height='233'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_tablet/public/2023-11/mobile-check-860-x477.webp?itok=Fe9AS6Ws 1x'
                          media='all and (min-width: 768px)'
                          type='image/webp'
                          width='414'
                          height='240'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/mobile-check-860-x477.webp?itok=CgnGFeVr 1x'
                          media='all and (min-width: 380px)'
                          type='image/webp'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/mobile-check-860-x477.webp?itok=CgnGFeVr 1x'
                          media='all and (max-width: 380px)'
                          type='image/webp'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_desktop/public/2023-11/mobile-check-860-x477.jpg?itok=FwiTnLd6 1x'
                          media='all and (min-width: 1440px)'
                          type='image/jpeg'
                          width='414'
                          height='233'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_tablet/public/2023-11/mobile-check-860-x477.jpg?itok=Fe9AS6Ws 1x'
                          media='all and (min-width: 768px)'
                          type='image/jpeg'
                          width='414'
                          height='240'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/mobile-check-860-x477.jpg?itok=CgnGFeVr 1x'
                          media='all and (min-width: 380px)'
                          type='image/jpeg'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/mobile-check-860-x477.jpg?itok=CgnGFeVr 1x'
                          media='all and (max-width: 380px)'
                          type='image/jpeg'
                          width='767'
                          height='450'
                        />
                        <img
                          loading='lazy'
                          src='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/mobile-check-860-x477.jpg?itok=CgnGFeVr'
                          width='767'
                          height='450'
                          alt=''
                        />
                      </picture>
                    </div>

                    <div className='tile-card-image__content'>
                      <h3 className='heading heading--sub heading--small'>
                        <Link
                          className='link link--inline-icon link--plain link--overlay heading__link'
                          aria-describedby='tile-card-image-951-277'
                          href='/about-dementia/dementia-diagnosis/how-to-get-dementia-diagnosis/dementia-symptoms-checklist'
                          data-js-processed='true'
                        >
                          <span className='link__content link__content--inline-icon link__content--plain'>
                            Dementia symptoms checklist
                          </span>
                        </Link>
                      </h3>

                      <p className='paragraph' id='tile-card-image-951-277'>
                        A checklist to help you make a note of symptoms before
                        you talk to your GP.
                      </p>
                    </div>
                    <div className='print-only'>
                      https://cc.alzheimers.org.uk/about-dementia/dementia-diagnosis/how-to-get-dementia-diagnosis/dementia-symptoms-checklist
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='tile-card-image component--print-outlined'>
                    <div className='field field--name-field-media-image field--type-image field--label-hidden field__item'>
                      {" "}
                      <picture>
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_desktop/public/2023-11/dementia-diagnosis-header-958x354.webp?itok=fiE_kvbs 1x'
                          media='all and (min-width: 1440px)'
                          type='image/webp'
                          width='414'
                          height='233'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_tablet/public/2023-11/dementia-diagnosis-header-958x354.webp?itok=Se3FbBim 1x'
                          media='all and (min-width: 768px)'
                          type='image/webp'
                          width='414'
                          height='240'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/dementia-diagnosis-header-958x354.webp?itok=uHm4JVlD 1x'
                          media='all and (min-width: 380px)'
                          type='image/webp'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/dementia-diagnosis-header-958x354.webp?itok=uHm4JVlD 1x'
                          media='all and (max-width: 380px)'
                          type='image/webp'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_desktop/public/2023-11/dementia-diagnosis-header-958x354.jpg?itok=fiE_kvbs 1x'
                          media='all and (min-width: 1440px)'
                          type='image/jpeg'
                          width='414'
                          height='233'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_tablet/public/2023-11/dementia-diagnosis-header-958x354.jpg?itok=Se3FbBim 1x'
                          media='all and (min-width: 768px)'
                          type='image/jpeg'
                          width='414'
                          height='240'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/dementia-diagnosis-header-958x354.jpg?itok=uHm4JVlD 1x'
                          media='all and (min-width: 380px)'
                          type='image/jpeg'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/dementia-diagnosis-header-958x354.jpg?itok=uHm4JVlD 1x'
                          media='all and (max-width: 380px)'
                          type='image/jpeg'
                          width='767'
                          height='450'
                        />
                        <img
                          loading='lazy'
                          src='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2023-11/dementia-diagnosis-header-958x354.jpg?itok=uHm4JVlD'
                          width='767'
                          height='450'
                          alt=''
                        />
                      </picture>
                    </div>

                    <div className='tile-card-image__content'>
                      <h3 className='heading heading--sub heading--small'>
                        <Link
                          className='link link--inline-icon link--plain link--overlay heading__link'
                          aria-describedby='tile-card-image-891-539'
                          href='/about-dementia/dementia-diagnosis'
                          data-js-processed='true'
                        >
                          <span className='link__content link__content--inline-icon link__content--plain'>
                            Dementia diagnosis
                          </span>
                        </Link>
                      </h3>

                      <p className='paragraph' id='tile-card-image-891-539'>
                        Find out how to get a dementia diagnosis and why it can
                        help you access the right support. Diagnosis stages are
                        different for everyone and we can offer advice and a
                        symptoms checklist to help you speak to your doctor.
                      </p>
                    </div>
                    <div className='print-only'>
                      https://cc.alzheimers.org.uk/about-dementia/dementia-diagnosis
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='tile-card-image component--print-outlined'>
                    <div className='field field--name-field-media-image field--type-image field--label-hidden field__item'>
                      {" "}
                      <picture>
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_desktop/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.webp?itok=PVhcCFyF 1x'
                          media='all and (min-width: 1440px)'
                          type='image/webp'
                          width='414'
                          height='233'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_tablet/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.webp?itok=EuplfPS_ 1x'
                          media='all and (min-width: 768px)'
                          type='image/webp'
                          width='414'
                          height='240'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.webp?itok=Yqzf4qON 1x'
                          media='all and (min-width: 380px)'
                          type='image/webp'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.webp?itok=Yqzf4qON 1x'
                          media='all and (max-width: 380px)'
                          type='image/webp'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_desktop/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.jpg?itok=PVhcCFyF 1x'
                          media='all and (min-width: 1440px)'
                          type='image/jpeg'
                          width='414'
                          height='233'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_tablet/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.jpg?itok=EuplfPS_ 1x'
                          media='all and (min-width: 768px)'
                          type='image/jpeg'
                          width='414'
                          height='240'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_mobile/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.jpg?itok=Yqzf4qON 1x'
                          media='all and (min-width: 380px)'
                          type='image/jpeg'
                          width='767'
                          height='450'
                        />
                        <source
                          srcSet='/cc/sites/default/files/styles/tiles_grid_image_mobile/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.jpg?itok=Yqzf4qON 1x'
                          media='all and (max-width: 380px)'
                          type='image/jpeg'
                          width='767'
                          height='450'
                        />
                        <img
                          loading='lazy'
                          src='https://cc.alzheimers.org.uk/sites/default/files/styles/tiles_grid_image_mobile/public/2025-06/four_years_to_get_a_diagnosis_tony_and_jackie_480x320.jpg?itok=Yqzf4qON'
                          width='767'
                          height='450'
                          alt=''
                        />
                      </picture>
                    </div>

                    <div className='tile-card-image__content'>
                      <h3 className='heading heading--sub heading--small'>
                        <Link
                          className='link link--inline-icon link--plain link--overlay heading__link'
                          aria-describedby='tile-card-image-137'
                          href='https://www.alzheimers.org.uk/blog/four-years-for-diagnosis-after-misdiagnosed'
                          data-js-processed='true'
                        >
                          <span className='link__content link__content--inline-icon link__content--plain'>
                            Four years to get a diagnosis after being
                            misdiagnosed
                          </span>
                        </Link>
                      </h3>

                      <p className='paragraph' id='tile-card-image-137'>
                        Jackie was diagnosed with early-onset Alzheimer&apos;s
                        disease, four years after being misdiagnosed.
                      </p>
                    </div>
                    <div className='print-only'>
                      https://www.alzheimers.org.uk/blog/four-years-for-diagnosis-after-misdiagnosed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShareThisPage />

      <div className='print-only component'>
        <h2>Alzheimer&apo;s Society dementia support line</h2>
        <p>Call 0333 150 3456.</p>
        <p>
          If you are affected by dementia, worried about a diagnosis or a carer,
          trained staff are ready to give you the support you need. Opening
          hours (excluding bank holidays): Mon to Weds: 9am – 8pm, Thurs and
          Fri: 9am – 5pm, Sat and Sun: 10am – 4pm.
        </p>
      </div>

      <div className='review-date component container'>
        <p className='review-date__date'>
          Last reviewed:
          <time dateTime='2023-12'>December 2023</time>
        </p>
        <p className='review-date__date'>
          Next review:
          <time dateTime='2025-12'>December 2025</time>
        </p>
      </div>
    </article>
  );
};
