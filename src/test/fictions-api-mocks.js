const data = {
  blocksReducer: {
    thawing: [
      {
        id: '5',
        type: 'blocks',
        attributes: {
          index: 1,
          timestamp: 1530679678,
          data: 'The Human Torch',
          'previous-hash': 'KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=',
          hash: 'oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc=',
        },
      },
      {
        id: '6',
        type: 'blocks',
        attributes: {
          index: 2,
          timestamp: 1530679684,
          data: 'is denied',
          'previous-hash': 'oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc=',
          hash: '9xr57PW8RVzeOniNP2lPVzAOu97x12mpDgjv70z5vo4=',
        },
      },
      {
        id: '7',
        type: 'blocks',
        attributes: {
          index: 3,
          timestamp: 1530679689,
          data: 'a bank loan',
          'previous-hash': '9xr57PW8RVzeOniNP2lPVzAOu97x12mpDgjv70z5vo4=',
          hash: 'YGLfNDMC2x2m5kwb3q+Ne/uCL4sFUnX/sQwzuwijx8A=',
        },
      },
    ],
    secret: [
      {
        id: '1',
        type: 'blocks',
        attributes: {
          index: 1,
          timestamp: 1530674152,
          data: 'every',
          'previous-hash': 'KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=',
          hash: 'udfJLmh13UNAxG4F/1on07OMN1K1vCuaTYn9H2XGiX0=',
        },
      },
      {
        id: '2',
        type: 'blocks',
        attributes: {
          index: 2,
          timestamp: 1530674158,
          data: 'good',
          'previous-hash': 'udfJLmh13UNAxG4F/1on07OMN1K1vCuaTYn9H2XGiX0=',
          hash: 'abIz/lhtXs6wn1GfEdwju0sdYmcejQii+/25qHn5xFA=',
        },
      },
    ],
    calm: [
      {
        id: '1',
        type: 'blocks',
        attributes: {
          index: 1,
          timestamp: 1530677153,
          data: 'By reason of these things',
          'previous-hash': 'KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=',
          hash: 'nzl9y9lf4NdSQZCw293n5ICLniP6GnWecWcvAjWKjnc=',
        },
      },
      {
        id: '2',
        type: 'blocks',
        attributes: {
          index: 2,
          timestamp: 1530677168,
          data: 'then the whaling voyage was welcome',
          'previous-hash': 'nzl9y9lf4NdSQZCw293n5ICLniP6GnWecWcvAjWKjnc=',
          hash: 'oWkTh652fFc89h0PHcBaGB/l/pfsPup75k9hIaI30Kw=',
        },
      },
    ],
    node: [],
    loaded: false,
  },
  statusReducer: {
    thawingStatus: {
      node_name: 'Thawing Springs',
    },
    secretStatus: {
      node_name: 'Secret Lowlands',
    },
    calmStatus: {
      node_name: 'Calm Anchorage',
    },
    nodeStatus: {},
    loadedStatus: true,
  },
};

const fetchMock = jest.fn(() => Promise.resolve(data));
export default fetchMock;
