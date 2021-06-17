<template>
  <JTitle title="스마트전단지" />
  <div class="container">
    <div class="option__container">
      <button type="button" class="button add default-button np-button np-button-flat active">등록</button>
    </div>
    <Carousel :show="$store.state.isMobile" :sliderInitValue="640">
      <template #default="propsObj">
        <div class="smart-view-list__container">
          <div :class="['smart-view-list-container__wrap', { mobile: $store.state.isMobile }]" :style="{ left: `${propsObj.sliderValue}px` }">
            <div class="wrapper" v-for="(list, index) in data.list" :key="index">
              <div class="smart-view-box np-button np-button-flat">
                <div class="contents-top flex cursor-pointer" @click="$router.push('detail/')">
                  <div class="image__container">
                    <div class="image__container-title">대표전단 이미지</div>
                    <div class="image__contents">
                      <img :src="require(`~img/default/food_${list.img}.jpg`)" class="image" alt="" />
                    </div>
                  </div>
                  <div class="infomation__container">
                    <div class="info-title">행사제목</div>
                    <div class="info-contents">{{ list.title }}</div>
                    <div class="info-title">행사날짜</div>
                    <div class="info-contents">{{ list.range }}</div>
                  </div>
                </div>
                <div class="contents-middle">
                  <div class="description__container">
                    <div class="description-title">상세내용</div>
                    <div class="description" v-html="list.description"></div>
                  </div>
                </div>
                <div class="contents-bottom">
                  <div class="button__wrap"><button type="button" class="np-button np-button-flat active default-button button button--copy">복사하기</button></div>
                  <div class="button__wrap"><button type="button" class="np-button np-button-flat active default-button button button--pop">스마트POP</button></div>
                  <div class="button__wrap"><button type="button" class="np-button np-button-flat active default-button button button--preview">미리보기</button></div>
                  <div class="button__wrap"><button type="button" class="np-button np-button-flat active default-button button button--sms">단문발송</button></div>
                  <div class="button__wrap"><button type="button" class="np-button np-button-flat active default-button button button--mms">장문발송</button></div>
                  <div class="button__wrap"><button type="button" class="np-button np-button-flat active default-button button button--edit" @click="$router.push('detail/')">수정</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from 'vue';
import { http, AxiosResponse } from '@/http/common';
import dayjs from 'dayjs';
/**
 * @type composables
 */
import useProgressBar from '@/composables/useProgressBar';
/**
 * @type components
 */
import Carousel from '@/components/carousel/default.vue';
// import JLines from '@/components/JLines.vue';

export default {
  name: 'smartEventList',
  components: {
    Carousel,
  },
  setup() {
    const { setProgressBar } = useProgressBar();
    const data = reactive({
      list: [],
    });

    http.get('/mock/smart-event-list.json').then((res: AxiosResponse) => {
      data.list = res.data.map((x: { title: string; description: string }) => {
        return {
          title: x.title,
          description: x.description,
          img: Math.floor(Math.random() * 5) + 1,
          range: `${dayjs().format('YYYY-MM-DD')} ~ ${dayjs()
            .add(Math.floor(Math.random() * 30) + 1, 'day')
            .format('YYYY-MM-DD')}`,
        };
      });
    });

    onMounted(() => {
      setProgressBar();
    });
    return {
      data,
      dayjs,
    };
  },
};
</script>
<style lang="scss" scopd>
@import './scss/smartEventList.scss';
</style>