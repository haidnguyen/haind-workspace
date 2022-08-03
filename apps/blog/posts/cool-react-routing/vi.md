---
date: "2021-02-21"
title: "Routing trong React sao cho ngầu"
tags: ['react', 'typescript']
featuredImage: /featured-images/cool-react-routing/featured.png
---

Routing chắc là cái basic nhất khi xây dựng React app rồi, nhưng bạn đã làm nó thật sự hay? 

# Ý tưởng

Thường thì mọi người hay dùng `react-router` trong React, phần code router thì nó sẽ như vầy

```typescript
const App: VFC = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
```

Lúc mình làm Angular thì thấy cách setup routing ở Angular khá là dễ để maintain, nên đã áp thử ý tưởng đó vô React và đây là kết quả.

Về cơ bản chúng ta sẽ có:
- Tất cả những chỗ cần routing trong React đều nằm chung một chỗ để dễ maintain.
- Routing sẽ linh hoạt hơn, có thể đặt ở đâu cũng được.
- Opt-in lazy loading, Suspense.
- Folder structure rõ hơn (cái này tuỳ có người nghĩ nó cũng vậy).

# Dependencies:

- react-router
- @loadable/component: có thể không dùng nếu không cần lazy load hoặc dùng React.lazy

# Tạo một reusable router component

Thay vì đoạn code ở đầu, chúng ta sẽ tạo một reuseable router component và dùng component đó để routing bằng cách truyền vào một list các route và component mà nó cần render ứng với route đó. Bạn đặt tên gì cũng được, mình đặt tên nó là `RouterOutlet`.

RouterOutlet.tsx

```typescript
import React, { FC, Suspense } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

export interface RouterOutletProps {
  baseUrl?: string;
  routes: RouteProps[];
  fallback?: React.ReactNode;
}

export type RouteConfig = RouteProps[];

const resovePath = (baseUrl?: string) => (path: RouteProps['path']) => `${baseUrl ?? ''}${path ?? ''}`;

export const RouterOutlet: FC<RouterOutletProps> = ({ baseUrl, routes, fallback }) => {
  return (
    <Suspense fallback={fallback ?? null}>
      <Switch>
        {routes.map(({ path, ...rest }, index) => (
          <Route {...rest} path={resovePath(baseUrl)(path)} key={index} />
        ))}
      </Switch>
    </Suspense>
  );
};
```

Ở đây mình dùng thêm React Suspense nữa, nếu không muốn thì có thể bỏ đi nhé!

Từ đây thay vì đoạn code lúc đầu chúng ta có thể dùng thế này.
```typescript
const routes: RouteConfig = [
  {
    path: '/users',
    component: loadable(() => import('@app/features/user')),
    exact: true,
  },
  {
    path: '/posts',
    component: loadable(() => import('@app/features/post')),
  },
];

const App: VFC = () => {
  return <RouterOutlet routes={routes} fallback={<div>Loading...</div>}/>
}

```

# Để các router outlet ở đâu?

Có 2 hướng mình nghĩ tới đó là theo feature base hoặc gom hết lại ở một folder là `routers`.

Nếu như project của bạn đang chia theo feature base thì trong mỗi folder của feature thì bạn tạo 1 cái `FeatureRouter` cho nó ví dụ:

features/user/UserFeatureRouter.tsx

```typescript
  const routes: RouteConfig = [
    {
    path: '/list',
    component: loadable(() => import('./UserList.tsx')),
    exact: true,
  },
  {
    path: '/remove',
    component: loadable(() => import('./RemoveUser.tsx')),
  },
  ];
  export const UserFeatuerRouter = () => {
    return <RouterOutlet routes={routes} fallback={<UserFeatureLoading/>}/>
  }
```

Sau đó bạn có thể sử dụng cái router này trong features/user/index.tsx

```typescript
export const UserFeature = () => {
  return (
    <div>
      <h1>User Feature</h1>
      <UserFeatureRouter />
    </div>
  )
}

```

Hoặc bạn có thể tạo một thư mục `routes` và trong đó có tất cả các router mà bạn tạo ra trong app, mình thì ưu tiên cách trên hơn nhưng mà chuyện chia theo feature-base thì trong React cũng không phổ biến lắm nhất là những project cũ.

Bài viết này chỉ có vậy thôi, chủ yếu kết hợp những cái hay của cả React và Angular với mục đích là vừa ngắn gọn, dễ hiểu như React vừa scale tốt và rõ ràng như Angular.

